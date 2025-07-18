"use client"
import { Button } from "@/components/ui/button";
import { useIsAdmin } from "@/helpers/helperFunctionsClient";
import { PencilIcon } from "lucide-react";
import Link from "next/link";

export default function EditPropertyButton({ propertyId }: { propertyId: string }) {
  const isAdmin = useIsAdmin()

  console.log("PROPERTY ID:   ", propertyId)

  console.log("isAdmin: ", isAdmin)

  if (!isAdmin) {
    return null // Don't render anything if not admin
  }

  return (

    <Button asChild variant="outline" size="sm">
      <Link href={`/admin-dashboard/edit/${propertyId}`}>
        <PencilIcon />
      </Link>
    </Button>
  )

}