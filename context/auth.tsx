"use client"
import { auth } from "@/firebase/client"
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, User } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"

type AuthContextType = {
  currentUser: User | null
  logout: () => Promise<void>
  loginWithGithub: () => Promise<void>
  loginWithGoogle: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user ?? null)
    })
    return () => unsubscribe()
  }, [])

  const logout = async () => {
    await auth.signOut();
  }

  const loginWithGithub = async () => {
    const githubProvider = new GithubAuthProvider();
    await signInWithPopup(auth, githubProvider)
  }

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  return (
    <AuthContext.Provider value={{
      currentUser,
      logout,
      loginWithGithub,
      loginWithGoogle
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}