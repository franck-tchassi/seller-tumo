"use client";

import React, { useActionState } from "react";
import { handleLogin } from "@/actions/seller";

interface ModalProps {
  handleShowModal: () => void;
  switchToSignUp?: () => void;
}

type AuthError = {
  email?: string[];
  password?: string[];
  general?: string;
};

type AuthState = {
  success: boolean;
  error: AuthError;
};

const ModalSignIn = ({ handleShowModal, switchToSignUp }: ModalProps) => {
  const [state, formAction] = useActionState<AuthState, FormData>(handleLogin, {
    success: false,
    error: {},
  });

  // Helper pour obtenir le premier message d'erreur
  const getError = (field: keyof AuthError) => 
    state.error?.[field]?.[0] || null;

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
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">Se connecter</h2>
          
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent"
              />
              {getError('password') && (
                <p className="mt-1 text-sm text-red-600">{getError('password')}</p>
              )}
            </div>

            {state.error?.general && (
              <div className="text-sm text-red-600 bg-red-50 p-2 rounded-md">
                {state.error.general}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-black cursor-pointer text-white py-2.5 rounded-md hover:bg-gray-800 transition-colors"
            >
              Continuer
            </button>
          </form>

          <div className="mt-4 text-sm text-center text-gray-600">
            Pas encore de compte ?{" "}
            <button 
              onClick={switchToSignUp} 
              className="text-blue-600 hover:underline cursor-pointer"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSignIn;