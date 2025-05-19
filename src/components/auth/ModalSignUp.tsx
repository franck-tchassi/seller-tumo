"use client";

import React, { useActionState, useState } from "react";
import { handleRegister } from "@/actions/seller";

interface ModalProps {
  handleShowModal: () => void;
  switchToSignIn: () => void;
}

type AuthError = {
  email?: string[];
  password?: string[];
  confirmPassword?: string[];
  storeName?: string[];
  general?: string;
};

type AuthState = {
  success: boolean;
  error: AuthError;
};

const ModalSignUp = ({ handleShowModal, switchToSignIn }: ModalProps) => {
    const [state, formAction] = useActionState<AuthState, FormData>(handleRegister as 
        (state: AuthState, payload: FormData) => Promise<AuthState>, {
        success: false,
        error: {},
      });
      
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
    
      const getError = (field: keyof AuthError) => 
        state.error?.[field]?.[0] || null;
    
      const passwordsMatch = password === confirmPassword;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[0.5px]">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl mx-4 overflow-hidden">
        <button
          onClick={handleShowModal}
          className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
        >
          ✕
        </button>

        <div className="p-8">
          <div className="text-center mb-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">S'inscrire</h2>
            <p>Commencez à vendre sur Tumo</p>
          </div>
          <form action={formAction} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
              {getError('email') && (
                <p className="mt-1 text-sm text-red-600">{getError('email')}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
              {getError('password') && (
                <p className="mt-1 text-sm text-red-600">{getError('password')}</p>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirmer le mot de passe
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-black focus:border-transparent ${
                  !passwordsMatch && confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {!passwordsMatch && confirmPassword && (
                <p className="mt-1 text-sm text-red-600">Les mots de passe ne correspondent pas</p>
              )}
              {getError('confirmPassword') && (
                <p className="mt-1 text-sm text-red-600">{getError('confirmPassword')}</p>
              )}
            </div>

            {state.error?.general && (
              <div className="text-sm text-red-600 bg-red-50 p-2 rounded-md">
                {state.error.general}
              </div>
            )}

            <button
              type="submit"
              disabled={!passwordsMatch}
              className={`w-full bg-black text-white py-2.5 cursor-pointer rounded-md hover:bg-gray-800 transition-colors ${
                !passwordsMatch ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Continuer
            </button>
          </form>

          <div className="mt-4 text-sm text-center text-gray-600">
            Déjà un compte ?{" "}
            <button 
              onClick={switchToSignIn} 
              className="text-blue-600 hover:underline cursor-pointer"
            >
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSignUp;