"use server"

import { prisma } from "../db/prisma";
import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";

import type { Seller, Session } from "../../lib/generated/prisma";

import { cookies } from "next/headers";
import { cache } from "react";


export async function generateSessionToken(): Promise<string> {
	const bytes = new Uint8Array(20);
	crypto.getRandomValues(bytes);
	const token = encodeBase32LowerCaseNoPadding(bytes);
	return token;
}

export async function createSession(token: string, userId: number | null = null, sellerId: number | null = null): Promise<Session> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const session: Session = {
		id: sessionId,
		userId,
        sellerId,
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
	};
	await prisma.session.create({
		data: session
	});
	return session;
}


export async function validateSessionToken(token: string): Promise<SessionValidationResult> {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
    const result = await prisma.session.findUnique({
        where: { id: sessionId },
        include: { seller: true }
    });

    // Cas où la session n'existe pas
    if (!result) {
        return { session: null, seller: null };
    }

    const { seller, ...session } = result;

    // Vérification d'expiration
    if (Date.now() >= session.expiresAt.getTime()) {
        await prisma.session.delete({ where: { id: sessionId } });
        return { session: null, seller: null };
    }

    // Prolongation de session si nécessaire
    if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
        const newExpiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
        await prisma.session.update({
            where: { id: session.id },
            data: { expiresAt: newExpiresAt }
        });
        session.expiresAt = newExpiresAt;
    }

    // Gestion du cas où seller est null
    if (!seller) {
        // Au lieu de throw, retournez un résultat cohérent
        await prisma.session.delete({ where: { id: sessionId } });
        return { session: null, seller: null };
    }

    const safeSeller = {
        ...seller,
        passwordHash: undefined
    };

    return { session, seller: safeSeller };
}

export async function invalidateSession(sessionId: string): Promise<void> {
	await prisma.session.delete({ where: { id: sessionId } });
}

export async function invalidateAllSessions(sellerId: number): Promise<void> {
	await prisma.session.deleteMany({
		where: {
			sellerId: sellerId
		}
	});
}

export type SessionValidationResult =
    | { session: Session; seller: Omit<Seller, "passwordHash"> }
    | { session: Session; seller: null } // Nouveau cas possible
    | { session: null; seller: null };



//cookie
export async function setSessionTokenCookie(token: string, expiresAt: Date): Promise<void> {
        const cookieStore = await cookies();
        cookieStore.set("session", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            expires: expiresAt,
            path: "/"
        });
}
    
export async function deleteSessionTokenCookie(): Promise<void> {
        const cookieStore = await cookies();
        cookieStore.set("session", "", {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            maxAge: 0,
            path: "/"
        });
}


export const getCurrentSession = cache(async (): Promise<SessionValidationResult> => {
	const cookieStore = await cookies();
	const token = cookieStore.get("session")?.value ?? null;
	if (token === null) {
		return { session: null, seller: null };
	}
	const result = await validateSessionToken(token);
	return result;
});



// Seller register, login, logout
export const hashPassword = async (password: string) =>{
    return encodeHexLowerCase(sha256(new TextEncoder().encode(password)));
}

export const verifyPassword = async (pasword: string, hash: string) =>{
    const passwordHash = await hashPassword(pasword);
    return passwordHash === hash;
}

export const registerSeller = async (email: string, password: string, storeName: string) =>{
    const passwordHash = await hashPassword(password);
    try{
        const seller = await prisma.seller.create({
            data:{
                email,
                passwordHash,
                storeName
            }
        });

        const safeSeller = {
            ...seller,
            passwordHash: undefined,
        }

        return{
            seller: safeSeller,
            error: null
        }
    }catch(e){
        return{
            seller: null,
            error: "Failled to register Seller"
        }
    }
}

export const loginSeller = async (email: string, password: string) =>{
    const seller = await prisma.seller.findUnique({
        where:{
            email: email,
        }
    });

    if(!seller){
        return{
            seller: null,
            error:"Seller not found",
        }
    }

    const passwordValid = await verifyPassword(password, seller.passwordHash);
    if(!passwordValid){
        return{
            seller: null,
            error:"Invalid password",
        }
    }
    
    const token = await generateSessionToken();
    const session = await createSession(token, null, seller.id);

    await setSessionTokenCookie(token, session.expiresAt);

    const safeSeller = {
        ...seller,
        passwordHash: undefined,
    }

    return{
        seller: safeSeller,
        error: null
    }
}

export const logoutSeller = async () =>{
    const session = await getCurrentSession();
    if(session.session?.id){
        await invalidateSession(session.session.id)
    }
    await deleteSessionTokenCookie();
}