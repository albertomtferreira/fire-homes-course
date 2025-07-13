import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-screen-sm mx-auto">
      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">My Account</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Email Section */}
          <div className="space-y-2 mb-6">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-5 w-64" />
          </div>

          {/* Update Password Form (conditional) */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-36" />

            {/* Current Password */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-10 w-full" />
            </div>

            {/* New Password */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Confirm New Password */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Update Password Button */}
            <Skeleton className="h-10 w-36" />
          </div>
        </CardContent>

        {/* Danger Zone Footer (conditional for non-admin users) */}
        <CardFooter className="flex flex-col items-start">
          <div className="mb-2">
            <Skeleton className="h-8 w-28" />
          </div>
          <Skeleton className="h-10 w-32" />
        </CardFooter>
      </Card>
    </div>
  )
}