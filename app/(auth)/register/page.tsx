// app/(auth)/login/page.tsx (Server Component - handles metadata)
import { generateMetadata } from "@/data/metadata";
import RegisterClient from "./components/register-client";



// Export metadata from server component
export const metadata = generateMetadata("register");

// Server component renders client component
export default function LoginPage() {
  return <RegisterClient />;
}