import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="grid grid-cols-[1fr_500px]">
      {/* Left Column */}
      <div>
        {/* Carousel Autoplay Images */}
        <div className="relative w-full h-96 bg-gray-100">
          <Skeleton className="h-full w-full" />
          {/* Carousel navigation dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-2 w-2 rounded-full" />
            ))}
          </div>
          {/* Carousel navigation arrows */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>

        {/* Property Description */}
        <div className="max-w-screen-md mx-auto py-10 px-4">
          {/* Back Button */}
          <div className="mb-6">
            <Skeleton className="h-10 w-20" />
          </div>

          {/* ReactMarkdown Description */}
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
            <Skeleton className="h-6 w-2/3" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Property Details */}
      <div className="bg-gray-50 p-6">
        <div className="sticky top-6">
          {/* Property Title */}
          <div className="mb-6">
            <Skeleton className="h-8 w-full mb-2" />
            <Skeleton className="h-6 w-4/5" />
          </div>

          {/* Address */}
          <div className="mb-6">
            <div className="space-y-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>

          {/* Property Features */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-4 w-12" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5" />
                <Skeleton className="h-4 w-12" />
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="mb-6">
            <Skeleton className="h-10 w-32" />
          </div>

          {/* Status Badge */}
          <div className="mb-6">
            <Skeleton className="h-8 w-24 rounded-full" />
          </div>

          {/* Contact/Action Buttons */}
          <div className="space-y-3">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>

          {/* Agent/Contact Info */}
          <div className="mt-8 p-4 bg-white rounded-lg">
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex-1">
                <Skeleton className="h-5 w-24 mb-1" />
                <Skeleton className="h-4 w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}