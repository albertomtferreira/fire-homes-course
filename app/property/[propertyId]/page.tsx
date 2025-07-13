import { getPropertyById } from "@/data/properties"
import ReactMarkdown from "react-markdown"
import BackButton from "../components/back-button"
import CarouselAutoplay from "../components/carousel-autoplay"
import PropertyDetails from "../components/property-details"

export const dynamic = "force-static"

export default async function Property({ params }: { params: Promise<any> }) {

  // Read the params from the browser address
  const paramsValue = await params

  // Call the function to grab the property details
  const property = await getPropertyById(paramsValue.propertyId)

  const addressLines = [
    property.address1,
    property.address2,
    property.city,
    property.postcode,
  ].filter((addressLine): addressLine is string => !!addressLine);

  return (
    <div className="grid grid-cols-[1fr_500px]">
      <div>
        {/* Call for Carousel Autoplay Images */}
        <CarouselAutoplay images={property.images} />
        <div className="property-description max-w-screen-md mx-auto py-10 px-4">
          {/* Call for Back Button */}
          <BackButton />
          <ReactMarkdown>
            {
              property.description
            }
          </ReactMarkdown>
        </div>
      </div>
      <PropertyDetails
        property={property}
        addressLines={addressLines}
      />
    </div>
  )
}