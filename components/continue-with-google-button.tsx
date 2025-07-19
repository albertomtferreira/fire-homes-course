"use client"
import { useAuth } from "@/context/auth"
import { Button } from "./ui/button"
import { SiGoogle } from "react-icons/si"

export default function ContinueWithGoogleButton() {
  const auth = useAuth()

  return (
    <Button
      variant="outline"
      onClick={async () => {
        try {
          // Force account selection by passing prompt parameter
          const options = { prompt: 'select_account' };
          await auth?.loginWithGoogle(options);
        } catch (e) {
          console.error('Google login error:', e);
        }
      }}
      className="w-full"
    >
      <SiGoogle className="w-5 h-5 text-black dark:text-white mr-2" />
      Continue With Google
    </Button>
  );
}