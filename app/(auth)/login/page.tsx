import ContinueWithGithubButton from "@/components/continue-with-github-button";
import ContinueWithGoogleButton from "@/components/continue-with-google-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


//LOGIN PAGE
export default function Login() {
  return (
    <Card className="color-box bg-card">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Login
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <ContinueWithGoogleButton />
        <ContinueWithGithubButton />
      </CardContent>
    </Card>
  )
}