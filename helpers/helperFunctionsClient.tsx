// helpers/helperFunctionsClient.tsx
"use client"

import { useAuth } from "@/context/auth"

export function useIsAdmin(): boolean {
  const auth = useAuth()
  try {
    return auth.customClaims?.admin ? true : false
  } catch (error) {
    console.error("Error validating admin user on client helper function", error)
    return false
  }
}