import { auth, firestore } from "@/firebase/server"
import { cookies } from "next/headers"
import "server-only"

export const getUserFavourites = async () => {
  const cookiesStore = await cookies()
  const token = cookiesStore.get("firebaseAuthToken")?.value

  if (!token) {
    return {}
  }

  const verifiedToken = await auth.verifyIdToken(token)

  if (!verifiedToken) {
    return {}
  }

  try {
    const favouritesSnapshot = await firestore
      .collection("favourites")
      .doc(verifiedToken.uid)
      .get()
    const favouritesData = favouritesSnapshot.data()

    // Filter favourites to only include properties that exist
    const filteredFavourites = await filterExistingProperties(favouritesData || {})

    return filteredFavourites
  } catch (error) {
    console.error("Error fetching user favourites:", error)
    return {}
  }
}

// Helper function to filter favourites by existing properties
const filterExistingProperties = async (favouritesData: any) => {
  if (!favouritesData || typeof favouritesData !== 'object') {
    return {}
  }

  const filteredFavourites: any = {}

  // Get all property IDs from favourites
  const propertyIds = Object.keys(favouritesData)

  if (propertyIds.length === 0) {
    return {}
  }

  // Batch check if properties exist (more efficient than individual queries)
  const propertyChecks = await Promise.all(
    propertyIds.map(async (propertyId) => {
      try {
        const propertyDoc = await firestore
          .collection("properties")
          .doc(propertyId)
          .get()

        return {
          id: propertyId,
          exists: propertyDoc.exists
        }
      } catch (error) {
        console.error(`Error checking property ${propertyId}:`, error)
        return {
          id: propertyId,
          exists: false
        }
      }
    })
  )

  // Filter out non-existing properties
  propertyChecks.forEach(({ id, exists }) => {
    if (exists) {
      filteredFavourites[id] = favouritesData[id]
    }
  })

  return filteredFavourites
}