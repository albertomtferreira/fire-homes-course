import PropertyStatusBadge from "@/components/property-status-badge";
import { PropertyDetailsProps } from "@/types/property";
import { BathIcon, BedIcon } from "lucide-react";
import numeral from "numeral";



export default function PropertyDetails({ property, addressLines }: PropertyDetailsProps) {
  return (
    <div className="bg-sky-200 h-screen p-10 sticky top-0 grid place-items-center">
      <div className="flex flex-col gap-10 w-full">
        <PropertyStatusBadge status={property.status} className="mr-auto text-base" />
        <h1 className="text-4xl font-semibold">
          {addressLines.map((addressLine, index) => (
            <div key={index}>
              {addressLine}
              {index < addressLines.length - 1 && ","}
            </div>
          ))}
        </h1>
        <h2 className="text-3xl font-light">£{numeral(property.price).format("0,0")}</h2>
        <div className="flex gap-10">
          <div className="flex gap-2">
            <BedIcon />{property.bedrooms} Bedrooms
          </div>
          <div className="flex gap-2">
            <BathIcon />{property.bathrooms} Bathrooms
          </div>
        </div>
      </div>
    </div>
  )
}