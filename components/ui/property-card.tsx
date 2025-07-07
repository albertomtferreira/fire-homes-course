import * as React from "react"
import { cn } from "@/lib/utils"

// Create a specific variant for property cards
function PropertyCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="property-card"
      className={cn(
        "bg-card text-card-foreground rounded-xl border shadow-sm overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

// Property card content without padding for images
function PropertyCardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="property-card-content"
      className={cn("", className)} // No default padding
      {...props}
    />
  )
}

// Property card body for content with padding
function PropertyCardBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="property-card-body"
      className={cn("p-6", className)}
      {...props}
    />
  )
}

// Property card image container
function PropertyCardImage({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="property-card-image"
      className={cn("relative overflow-hidden", className)}
      {...props}
    />
  )
}

export {
  PropertyCard,
  PropertyCardContent,
  PropertyCardBody,
  PropertyCardImage,
}