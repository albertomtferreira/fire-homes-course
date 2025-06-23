"use client"
import { useAuth } from "@/context/auth";
import { Button } from "./ui/button"


import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ContinueWithGithubButton() {
  const auth = useAuth()
  const router = useRouter()
  return (
    <Button
      variant="outline"
      onClick={async () => {
        try {
          await auth?.loginWithGithub();
          // BUG Router refresh not working
          router.refresh();
        } catch (e) { }
      }}
      className="w-full"
    >

      <FaGithub className="w-5 h-5 text-black dark:text-white mr-2" />
      Continue With Github
    </Button>
  )
}
