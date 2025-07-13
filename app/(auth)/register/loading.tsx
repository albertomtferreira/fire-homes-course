import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Register</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Register Form */}
        <div className="space-y-4">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-18" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-18" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start space-x-2">
            <Skeleton className="h-4 w-4 mt-1" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>

          {/* Register Button */}
          <Skeleton className="h-10 w-full" />

          {/* OR Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Skeleton className="h-px w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <Skeleton className="h-4 w-8" />
            </div>
          </div>

          {/* Social Register Buttons */}
          <div className="space-y-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-sm flex items-center">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-4 w-20 ml-2" />
        </div>
      </CardFooter>
    </Card>
  )
}