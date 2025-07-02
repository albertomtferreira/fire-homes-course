"use server"

import ClientCarousel from "./client-carousel"
import { CarouselAutoplayProps, Property } from "@/types/property"


export default async function CarouselAutoplay({ images }: CarouselAutoplayProps) {
  return (
    <>
      {!!images && (
        <ClientCarousel images={images} />
      )}
    </>
  )
}