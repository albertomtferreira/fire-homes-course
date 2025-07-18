import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "@/context/auth";
import AuthButtons from "@/components/auth-buttons";
import { HomeIcon } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { rootLayoutMetadata } from "@/data/metadata";
import Navigation from "@/components/navigation";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = rootLayoutMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <AuthProvider>
          <Navigation />
          {children}
          <Toaster richColors closeButton />
          <SpeedInsights />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
