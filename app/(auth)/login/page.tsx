// app/(auth)/login/page.tsx (Server Component - handles metadata)
import { generateMetadata } from "@/data/metadata";
import LoginClient from "./components/login-client";


// Export metadata from server component
export const metadata = generateMetadata("login");

// Server component renders client component
export default function LoginPage() {
  return <LoginClient />;
}