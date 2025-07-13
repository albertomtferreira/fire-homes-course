import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Page Title */}
      <div className="p-5">
        <h1 className="text-4xl font-bold p-5">Property Search</h1>
      </div>

      {/* Filters Card */}
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-6 w-16" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-24" />
          </div>
        </CardContent>
      </Card>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-3 mt-5 gap-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="h-full flex flex-col">
            <CardContent className="flex flex-col h-full p-0">
              {/* Property Image */}
              <div className="h-40 bg-sky-50 relative">
                <Skeleton className="h-full w-full rounded-t-lg" />
                {/* Favorite button skeleton */}
                <div className="absolute top-2 right-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>

              {/* Property Details */}
              <div className="flex flex-col gap-5 flex-grow p-6">
                {/* Address */}
                <div className="h-12 flex items-start">
                  <div className="space-y-1 w-full">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>

                {/* Bedrooms and Bathrooms */}
                <div className="flex gap-5">
                  <div className="flex gap-2 items-center">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-5 w-4" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <Skeleton className="h-5 w-5" />
                    <Skeleton className="h-5 w-4" />
                  </div>
                </div>

                {/* Price */}
                <Skeleton className="h-8 w-32" />

                {/* Spacer */}
                <div className="flex-grow"></div>

                {/* View Property Button */}
                <Skeleton className="h-10 w-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex gap-2 items-center justify-center py-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-10" />
        ))}
      </div>
    </div>
  )
}