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

      {/* New Property Card */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            New Property
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* New Property Form */}
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
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                <div className="text-center space-y-4">
                  <Skeleton className="h-12 w-12 mx-auto" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-48 mx-auto" />
                    <Skeleton className="h-4 w-32 mx-auto" />
                  </div>
                  <Skeleton className="h-10 w-32 mx-auto" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-20" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}