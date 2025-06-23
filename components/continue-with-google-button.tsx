"use client"
import { useAuth } from "@/context/auth"
import { Button } from "./ui/button"
import { SiGoogle } from "react-icons/si"
import { useRouter } from "next/navigation"

export default function ContinueWithGoogleButton() {
  const auth = useAuth()
  const router = useRouter()
  return (
    <Button
      variant="outline"
      onClick={async () => {
        try {
          await auth?.loginWithGoogle();
          // BUG Router refresh not working
          router.refresh();
        } catch (e) { }
      }}
      className="w-full"
    >
      <SiGoogle className="w-5 h-5 text-black dark:text-white mr-2" />
      Continue With Google
    </Button>
  );
}

