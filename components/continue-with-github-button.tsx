"use client"
import { useAuth } from "@/context/auth";
import { Button } from "./ui/button"
import { FaGithub } from "react-icons/fa";

export default function ContinueWithGithubButton() {
  const auth = useAuth()

  return (
    <Button
      variant="outline"
      onClick={async () => {
        try {
          await auth?.loginWithGithub();
        } catch (e) { }
      }}
      className="w-full"
    >

      <FaGithub className="w-5 h-5 text-black dark:text-white mr-2" />
      Continue With Github
    </Button>
  )
}
