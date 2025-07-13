import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ForgotPasswordForm from "./component/forgot-password-form";

export default function ForgotPassword() {
  return (
    <Card className="color-box bg-card">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Forgot Password
        </CardTitle>
        <CardDescription>
          Enter your email address below and you will receive a link to reset your password
        </CardDescription>
        <CardContent>
          <ForgotPasswordForm />
        </CardContent>
      </CardHeader>
    </Card>
  )
}