"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { auth } from "@/firebase/client"
import { sendPasswordResetEmail } from "firebase/auth"

import { useState } from "react"
import { toast } from "sonner"

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("")

  return (
    <form onSubmit={async (e) => {
      e.preventDefault()
      await sendPasswordResetEmail(auth, email)
      toast.message("Check your inbox and spam folders")
    }}
      className="flex flex-col gap-4">
      <Input
        type="email"
        className="bg-white"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button className="w-full" type="submit" >Reset Password</Button>
    </form>
  )
}