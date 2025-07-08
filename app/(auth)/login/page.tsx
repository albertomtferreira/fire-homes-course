import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./components/login-form";
import Link from "next/link";

//LOGIN PAGE
export default function Login() {
  return (
    <Card className="color-box bg-card">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <LoginForm />
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
