import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <Card className="color-box bg-card">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Forgot Password
        </CardTitle>
        <CardDescription>
          <div className="space-y-2 mt-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Forgot Password Form */}
        <div className="space-y-4">
          {/* Email Input */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>

          {/* Submit Button */}
          <Skeleton className="h-10 w-full" />

          {/* Back to Login Link */}
          <div className="text-center pt-2">
            <Skeleton className="h-4 w-24 mx-auto" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}