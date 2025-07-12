"use client"

import { HeartIcon } from "lucide-react"
import { addFavourite, removeFavourite } from "../actions"
import { useAuth } from "@/context/auth"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function ToggleFavouriteButton(
  { propertyId, isFavourite }
    :
    { propertyId: string, isFavourite: boolean }) {
  const auth = useAuth()
  const router = useRouter()

  return (
    <button
      className="absolute top-0 right-0 z-10 p-2 bg-white opacity-85 rounded-bl-lg"
      onClick={async () => {
        const tokenResult = await auth?.currentUser?.getIdTokenResult();
        if (!tokenResult) {
          router.push("/login")
          return
        }

        if (isFavourite) {
          await removeFavourite(propertyId, tokenResult.token)
          toast.dismiss()
        } else {
          await addFavourite(propertyId, tokenResult.token)
          toast.dismiss()
        }
        toast.info(`Property ${!isFavourite ? "added" : "removed"} to your favourites list`);


        router.refresh()
      }}
    >
      <HeartIcon fill={isFavourite ? "#db2777" : "white"} className="text-black" />
    </button>)
}