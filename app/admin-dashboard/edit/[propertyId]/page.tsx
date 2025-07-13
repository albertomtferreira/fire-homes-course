import { Breadcrumbs } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getPropertyById } from "@/data/properties"
import EditPropertyForm from "./edit-property-form"
import DeletePropertyButton from "./components/delete-property-button"

export default async function EditProperty({ params }: { params: Promise<any> }) {
  // Read the params from the browser address
  const paramsValue = await params
  // Call the function to grab the property details
  const property = await getPropertyById(paramsValue.propertyId)

  return (
    <div>

      {/* Route with Breadcrumbs */}
      <Breadcrumbs
        items={[{
          href: "/admin-dashboard",
          label: "Dashboard"
        }, {
          label: "Edit Property"
        }]}
      />

      {/* Edit Property Card */}
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-bold flex justify-between">
            Edit Property <DeletePropertyButton propertyId={property.id} images={property.images ?? []} />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EditPropertyForm
            id={property.id}
            address1={property.address1}
            address2={property.address2}
            city={property.city}
            postcode={property.postcode}
            bathrooms={property.bathrooms}
            bedrooms={property.bedrooms}
            price={property.price}
            description={property.description}
            status={property.status}
            images={property.images || []}
          />
        </CardContent>
      </Card>
    </div>
  )
}
