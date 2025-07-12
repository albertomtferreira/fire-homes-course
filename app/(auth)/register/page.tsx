//Register Page

import RegisterForm from "@/components/register-form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Link from "next/link";

export default function Register() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter>
        <div className="text-sm">
          Already have an account?
          <Link href="/login" className="pl-2 underline font-semibold">
            Login Here!
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}