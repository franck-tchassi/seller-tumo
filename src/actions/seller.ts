"use server"

import { SignUpSchema, SignInSchema } from "@/lib/validations/auth"
import { registerSeller, loginSeller } from "@/actions/auth"
import { redirect } from "next/navigation"

export async function handleRegister(prevState: any, formData: FormData) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  }

  // Validation supplémentaire pour la confirmation du mot de passe
  if (rawData.password !== rawData.confirmPassword) {
    return {
      success: false,
      error: { password: "Les mots de passe ne correspondent pas" },
    };
  }

  const parse = SignUpSchema.safeParse(rawData)

  if (!parse.success) {
    const error = parse.error.flatten().fieldErrors
    return {
      success: false,
      error: error,
    }
  }

  const { email, password, storeName } = parse.data

  // Création du compte
  const { seller, error } = await registerSeller(email, password, storeName ?? "Ma boutique")

  if (error || !seller) {
    return { success: false, error: { general: error ?? "Erreur lors de l'inscription" } }
  }

  // Connexion automatique
  const loginResult = await loginSeller(email, password)

  if (!loginResult.seller) {
    return { success: false, error: { general: "Échec de la connexion après inscription" } }
  }

  // Redirection vers /dashboard
  redirect("/dashboard")
}

export async function handleLogin(prevState: any, formData: FormData) {
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  }

  const parse = SignInSchema.safeParse(rawData)

  if (!parse.success) {
    const error = parse.error.flatten().fieldErrors
    return {
      success: false,
      error: error,
    }
  }

  const { email, password } = parse.data

  const { seller, error } = await loginSeller(email, password)

  if (error || !seller) {
    return { success: false, error: { general: error ?? "Identifiants invalides" } }
  }

  // Redirection vers /dashboard
  redirect("/dashboard")
}
