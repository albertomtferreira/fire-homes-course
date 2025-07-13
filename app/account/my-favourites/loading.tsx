import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-screen-lg mx-auto">
      {/* Page Title */}
      <div className="py-4 mt-5">
        <h1 className="text-4xl font-bold">My favourites</h1>
      </div>

      {/* Favourites Table */}
      <div className="mt-4 border rounded-lg">
        {/* Table Header */}
        <div className="border-b bg-gray-50">
          <div className="grid grid-cols-[1fr_auto_auto] gap-4 p-4">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
            <div className="w-20"></div>
          </div>
        </div>

        {/* Table Body */}
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="border-b last:border-b-0">
            <div className="grid grid-cols-[1fr_auto_auto] gap-4 p-4 items-center">
              {/* Property Address */}
              <div className="space-y-1">
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-4 w-48" />
              </div>

              {/* Status Badge */}
              <Skeleton className="h-6 w-20 rounded-full" />

              {/* Action Buttons */}
              <div className="flex justify-end gap-1">
                <Skeleton className="h-9 w-9" />
                <Skeleton className="h-9 w-9" />
              </div>
            </div>
          </div>
        ))}

        {/* Table Footer - Pagination */}
        <div className="border-t bg-gray-50 p-4">
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-9 w-9" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}