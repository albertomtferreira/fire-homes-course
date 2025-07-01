// ACTION THAT SAVES PROPERTY DATA TO FIREBASE AND RETURNS PROPERTY ID
"use server"

import { auth, firestore } from "@/firebase/server";
import { PropertyStatus } from "@/types/propertyStatus";
import { propertyDataSchema } from "@/validation/propertySchema";


export const createProperty = async (
  data: {
    address1: string;
    address2?: string;
    city: string;
    postcode: string;
    description: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    status: PropertyStatus;
  }, authToken: string
) => {

  const verifiedToken = await auth.verifyIdToken(authToken);
  if (!verifiedToken.admin) {
    return {
      error: true,
      message: "Unauthorized"
    }
  }
  const validation = propertyDataSchema.safeParse(data)

  if (!validation.success) {
    return {
      error: true,
      message: validation.error.issues[0]?.message ?? "An error occurred"
    }
  }

  const property = await firestore.collection("properties").add({
    ...data,
    created: new Date(),
    updated: new Date()
  })
  return {
    propertyId: property.id
  }
}


