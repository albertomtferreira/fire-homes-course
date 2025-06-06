"use client"
import { useAuth } from "@/context/auth";
import { Button } from "./ui/button"

export default function ContinueWithGithubButton() {
  const auth = useAuth()
  return (
    <Button onClick={() => {
      auth?.loginWithGithub();
    }}>
      Continue With Github
    </Button>
  )
}