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

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: {
    default: "Fire Homes - Find Your Dream Property",
    template: "%s | Fire Homes"
  },
  description: "Discover exceptional properties with Fire Homes. Search through premium real estate listings, find your perfect home, and connect with trusted property experts.",
  keywords: [
    "real estate",
    "property search",
    "homes for sale",
    "Fire Homes",
    "property listings",
    "dream home",
    "house hunting",
    "real estate agent"
  ],
  authors: [{ name: "Fire Homes Team" }],
  creator: "Fire Homes",
  publisher: "Fire Homes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fire-homes-course-lemon.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Fire Homes - Find Your Dream Property",
    description: "Discover exceptional properties with Fire Homes. Search through premium real estate listings and find your perfect home.",
    url: 'https://fire-homes-course-lemon.vercel.app/',
    siteName: 'Fire Homes',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fire Homes - Premium Real Estate',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fire Homes - Find Your Dream Property',
    description: 'Discover exceptional properties with Fire Homes. Search through premium real estate listings and find your perfect home.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon_io/favicon.ico',
    shortcut: '/favicon_io/favicon-16x16.png',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'hx48tYQVC95X2l_hMNfdwkvaURJNkS7yr_dwHPwhpFk',
  },
};

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
          <nav className="bg-accent p-5 h-24 flex items-center justify-between z-10 relative">
            <Link href="/" className="text-3xl tracking-widest flex gap-2 items-center uppercase">
              <HomeIcon />
              <span>Fire Homes</span>
            </Link>
            <ul className="flex items-center justify-between gap-6">
              <li>
                <Link href="/property-search" className="uppercase tracking-widest hover:underline">Property Search</Link>
              </li>
              <li>
                <AuthButtons />
              </li>
            </ul>
          </nav>
          {children}
          <Toaster richColors closeButton />
          <SpeedInsights />
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
