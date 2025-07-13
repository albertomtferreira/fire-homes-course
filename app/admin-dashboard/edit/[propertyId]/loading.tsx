import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 mb-5">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Edit Property Card */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-bold flex justify-between">
            Edit Property
            <Skeleton className="h-10 w-10" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Edit Property Form */}
          <div className="space-y-6">

            {/* Address Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-18" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-18" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-10 w-48" />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-32 w-full" />
            </div>

            {/* Images Section */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-16" />
              <div className="grid grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="relative">
                    <Skeleton className="h-32 w-full rounded-lg" />
                    <div className="absolute top-2 right-2">
                      <Skeleton className="h-6 w-6 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
              <Skeleton className="h-10 w-32" />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-20" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}