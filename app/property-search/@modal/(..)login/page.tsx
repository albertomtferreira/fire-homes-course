"use client"
import LoginForm from "@/components/login-form";
import { DialogDescription, DialogHeader, Dialog, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginSuccess } from "./actions";


export default function LoginModal() {
  const router = useRouter()
  return (
    <Dialog
      open
      onOpenChange={() => {
        router.back()
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Login
          </DialogTitle>
          <DialogDescription>
            You must be logged in to favourite a property
          </DialogDescription>
        </DialogHeader>
        <LoginForm onSuccess={async () => {
          await loginSuccess()
          router.back()
        }} />
        <DialogFooter>
          <div className="text-sm">
            Don&apos;t have an account?
            <Link href="/register" className="pl-2 underline font-semibold">
              Register Here!
            </Link>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}