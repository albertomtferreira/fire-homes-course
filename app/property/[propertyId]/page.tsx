import { Button } from "@/components/ui/button"
import { getPropertyById } from "@/data/properties"
import { ArrowLeftIcon } from "lucide-react"
import ReactMarkdown from "react-markdown"


export default async function Property({ params }: { params: Promise<any> }) {
  // Read the params from the browser address
  const paramsValue = await params
  // console.log({ paramsValue })

  // Call the function to grab the property details
  const property = await getPropertyById(paramsValue.propertyId)

  return (
    <div className="grid grid-cols-[1fr_400px]">
      <div>
        Carousel
        <div className="property-description max-w-screen-md mx-auto py-10 px-4">
          <Button>
            <ArrowLeftIcon />
            Back
          </Button>
          <ReactMarkdown>
            {
              property.description
            }
          </ReactMarkdown>
        </div>
      </div>

      <div className="bg-sky-200 h-screen sticky">
        Property Snapshot
      </div>
    </div>
  )
}