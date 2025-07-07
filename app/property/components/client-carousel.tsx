"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"
import imageUrlFormatter from "@/lib/imageUrlFormatter"

interface ClientCarouselProps {
  images: string[]
}

export default function ClientCarousel({ images }: ClientCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div className="relative w-full">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image}>
              <div className="relative h-[60vh] min-h-80">
                <Image
                  alt={`Image ${index + 1}`}
                  src={imageUrlFormatter(image)}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="translate-x-24 size-12" />
            <CarouselNext className="-translate-x-24 size-12" />
          </>
        )}
      </Carousel>
      {/* Image counter overlay - positioned over the entire carousel */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm z-10">
        {current} / {count}
      </div>
    </div>
  )
}