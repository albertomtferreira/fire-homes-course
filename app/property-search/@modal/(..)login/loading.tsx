import { DialogDescription, DialogHeader, Dialog, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Login
          </DialogTitle>
          <DialogDescription>
            You must be logged in to favourite a property
          </DialogDescription>
        </DialogHeader>

        {/* Login Form */}
        <div className="space-y-4 py-4">
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

          {/* Remember Me / Forgot Password Row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-20" />
            </div>
            <Skeleton className="h-4 w-28" />
          </div>

          {/* Login Button */}
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

          {/* Social Login Buttons */}
          <div className="space-y-2">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        <DialogFooter>
          <div className="text-sm flex items-center">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24 ml-2" />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}