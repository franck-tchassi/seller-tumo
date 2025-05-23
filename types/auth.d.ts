// types/auth.d.ts ou directement dans votre fichier
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