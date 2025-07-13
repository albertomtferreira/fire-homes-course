import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="flex items-center space-x-2 mb-6">
        <Skeleton className="h-4 w-20" />
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-bold mt-6">Admin Dashboard</h1>

      {/* New Property Button */}
      <div className="mt-4">
        <Skeleton className="h-10 w-36" />
      </div>

      {/* Properties Table */}
      <div className="mt-6">
        {/* Table Header */}
        <div className="border rounded-lg">
          <div className="border-b bg-gray-50 p-4">
            <div className="grid grid-cols-6 gap-4">
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-14" />
              <Skeleton className="h-4 w-16" />
            </div>
          </div>

          {/* Table Rows */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="border-b last:border-b-0 p-4">
              <div className="grid grid-cols-6 gap-4 items-center">
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-4 w-24" />
                <div className="space-y-1">
                  <Skeleton className="h-3 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-6 w-16 rounded-full" />
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-8" />
                  <Skeleton className="h-8 w-8" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex gap-2 items-center justify-center py-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-10 w-10" />
          ))}
        </div>
      </div>
    </div>
  )
}