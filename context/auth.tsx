"use client";
import { auth } from "@/firebase/client";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  ParsedToken,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
  UserCredential,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { removeToken, setToken } from "./actions";
import { toast } from "sonner";

type AuthContextType = {
  currentUser: User | null;
  logout: () => Promise<void>;
  loginWithGithub: () => Promise<UserCredential | void>;
  loginWithGoogle: (options?: { prompt?: string }) => Promise<UserCredential>;
  customClaims: ParsedToken | null;
  loginWithEmail: (email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const initialLoad = useRef(true)
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [customClaims, setCustomClaims] = useState<ParsedToken | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user ?? null);
      if (user) {
        const tokenResult = await user.getIdTokenResult();
        const token = tokenResult.token;
        const refreshToken = user.refreshToken;
        const claims = tokenResult.claims;
        setCustomClaims(claims ?? null);
        if (token && refreshToken) {
          await setToken({ token, refreshToken });
        }
      } else {
        await removeToken();
      }
      if (!initialLoad.current) {
        router.refresh();
      }
      initialLoad.current = false;
    });
    return () => unsubscribe();
  }, [router]);

  const logout = async () => {
    await auth.signOut();
  };

  const loginWithGoogle = async (options?: { prompt?: string }) => {
    const googleProvider = new GoogleAuthProvider();


    // Set custom parameters if provided
    if (options?.prompt) {
      googleProvider.setCustomParameters({
        prompt: options.prompt
      });

    } else {
      // Optionally, you can force select_account as default
      googleProvider.setCustomParameters({
        prompt: 'select_account'
      });
    }

    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (error) {
      console.error("Google login error:", error);
      throw error;
    }
  };

  const loginWithGithub = async () => {
    const githubProvider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, githubProvider);
      return result
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';

      toast.error("Error!", {
        description: `${errorMessage === "Firebase: Error (auth/account-exists-with-different-credential)."
          ? "The email address is already in use by another account"
          : errorMessage}`
      });
    }
  };

  const loginWithEmail = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        logout,
        loginWithGithub,
        loginWithGoogle,
        customClaims,
        loginWithEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
