// app/(auth)/login/login-client.tsx (Client Component - handles interactivity)
"use client";

import LoginForm from "@/components/login-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginClient() {
  const router = useRouter();

  return (
    <Card className="color-box bg-card">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <LoginForm onSuccess={() => {
          router.refresh();
        }} />
      </CardContent>
      <CardFooter>
        <div className="text-sm">
          Don&apos;t have an account?
          <Link href="/register" className="pl-2 underline font-semibold">
            Register Here!
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}