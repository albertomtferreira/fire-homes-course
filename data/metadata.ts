// data/metadata.ts
import type { Metadata } from "next";

export const siteConfig = {
  name: "Fire Homes",
  description: "Discover exceptional properties with Fire Homes. Search through premium real estate listings, find your perfect home, and connect with trusted property experts.",
  url: "https://fire-homes-course-lemon.vercel.app",
  ogImage: "/og-image.png",
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
};

export const pageMetadata = {
  home: {
    title: "Fire Homes - Find Your Dream Property",
    description: "Discover exceptional properties with Fire Homes. Search through premium real estate listings and find your perfect home.",
  },
  propertySearch: {
    title: "Property Search",
    description: "Search through thousands of premium properties. Find your perfect home with advanced filters and detailed listings.",
  },
  login: {
    title: "Login",
    description: "Sign in to your Fire Homes account to access saved properties, favorites, and personalized recommendations.",
  },
  register: {
    title: "Create Account",
    description: "Join Fire Homes today to save your favorite properties and get personalized property recommendations.",
  },
  adminDashboard: {
    title: "Admin Dashboard",
    description: "Manage properties, users, and listings on Fire Homes admin dashboard.",
  },
  account: {
    title: "My Account",
    description: "Manage your Fire Homes account settings, saved properties, and preferences.",
  },
  propertyDetails: {
    title: "Property Details",
    description: "View full details of properties."
  },
  editProperty: {
    title: "Edit Property Details",
    description: "Edit the details of your properties."
  },
  newProperty: {
    title: "Add New Property",
    description: "Add new properties to your portfolio"
  }
  ,
  myFavourites: {
    title: "My-Favourites",
    description: "Manage your favourite profiles"
  }
} as const;

// Helper function to generate metadata
export function generateMetadata(pageKey: keyof typeof pageMetadata): Metadata {
  const page = pageMetadata[pageKey];

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [siteConfig.ogImage],
    },
  };
}