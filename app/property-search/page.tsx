import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PropertyCard, PropertyCardContent, PropertyCardBody, PropertyCardImage } from "@/components/ui/property-card"
import FiltersForm from "./components/filters-form"
import { Suspense } from "react"
import { getProperties } from "@/data/properties";
import Image from "next/image";
import imageUrlFormatter from "@/lib/imageUrlFormatter";
import { BathIcon, BedIcon, HomeIcon } from "lucide-react";
import numeral from "numeral";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ToggleFavouriteButton from "./components/toggle-favourite-button";
import { getUserFavourites } from "@/data/favourites";
import { cookies } from "next/headers";
import { auth } from "@/firebase/server";
import { DecodedIdToken } from "firebase-admin/auth";

export default async function PropertySearch({
  searchParams
}: {
  searchParams: Promise<any>
}
) {
  const searchParamsValues = await searchParams;

  const parsedPage = parseInt(searchParamsValues?.page)
  const parsedMinPrice = parseInt(searchParamsValues?.minPrice)
  const parsedMaxPrice = parseInt(searchParamsValues?.maxPrice)
  const parsedMinBedrooms = parseInt(searchParamsValues?.minBedrooms)

  const page = isNaN(parsedPage) ? 1 : parsedPage;
  const minPrice = isNaN(parsedMinPrice) ? null : parsedMinPrice;
  const maxPrice = isNaN(parsedMaxPrice) ? null : parsedMaxPrice;
  const minBedrooms = isNaN(parsedMinBedrooms) ? null : parsedMinBedrooms;

  const { data, totalPages } = await getProperties({
    pagination: {
      page,
      pageSize: 3
    },
    filter: {
      minPrice,
      maxPrice,
      minBedrooms,
      status: ["for-sale"]
    }
  })

  const userFavourites = await getUserFavourites()
  const cookieStore = cookies()
  const token = cookieStore.get("firebaseAuthToken")?.value
  let verifiedToken: DecodedIdToken | null

  if (token) {
    verifiedToken = await auth.verifyIdToken(token)
  }

  return (
    <div className=" max-w-screen-lg mx-auto">
      <h1 className="text-4xl font-bold p-5">Property Search</h1>
      <Card>
        <CardHeader>
          <CardTitle>
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense>
            <FiltersForm />
          </Suspense>
        </CardContent>
      </Card>
      <div className="grid grid-cols-3 mt-5 gap-5">
        {
          data.map(property => {
            const addressLines = [
              property.address1,
              property.address2,
              property.city,
              property.postcode,
            ]
              .filter((addressLine) => !!addressLine)
              .join(", ");
            return (
              // TODO - create carousel for the images
              <PropertyCard key={property.id} className="h-full flex flex-col">
                <PropertyCardContent className="flex flex-col h-full">
                  <PropertyCardImage className="h-40 bg-sky-50 text-zinc-400 flex flex-col justify-center items-center">

                    {(!verifiedToken || !verifiedToken.admin) &&
                      <ToggleFavouriteButton
                        isFavourite={userFavourites[property.id]}
                        propertyId={property.id} />
                    }

                    {!!property.images?.[0] && (
                      <Image
                        fill
                        className="object-cover"
                        src={imageUrlFormatter(property.images[0])}
                        alt=""
                      />
                    )}

                    {!property.images?.[0] && (
                      <>
                        <HomeIcon />
                        <small>No Image</small>
                      </>
                    )}

                  </PropertyCardImage>

                  <PropertyCardBody className="flex flex-col gap-5 flex-grow">
                    {/* Address with 2-line limit */}
                    <p className="line-clamp-2 text-sm text-gray-600 leading-relaxed h-12 flex items-start font-semibold" title={addressLines}>
                      {addressLines}
                    </p>

                    <div className="flex gap-5">
                      <div className="flex gap-2 items-center font-semibold">
                        <BedIcon /> {property.bedrooms}
                      </div>
                      <div className="flex gap-2 items-center font-semibold">
                        <BathIcon /> {property.bathrooms}
                      </div>
                    </div>
                    <p className="text-2xl font-bold">
                      £{numeral(property.price).format("0,0")}
                    </p>

                    {/* This div will push the button to the bottom */}
                    <div className="flex-grow"></div>

                    <Button asChild>
                      <Link href={`/property/${property.id}`}>View Property</Link>
                    </Button>
                  </PropertyCardBody>
                </PropertyCardContent>
              </PropertyCard>
            )
          })
        }
      </div>
      <div className="flex gap-2 items-center justify-center py-10">
        {/* TODO - Pagination can be created as a helper function*/}
        {Array.from({ length: totalPages }).map((_, i) => {
          const newSearchParams = new URLSearchParams();

          if (searchParamsValues?.minPrice) {
            newSearchParams.set("minPrice", searchParamsValues.minPrice);
          }

          if (searchParamsValues?.maxPrice) {
            newSearchParams.set("maxPrice", searchParamsValues.maxPrice);
          }

          if (searchParamsValues?.minBedrooms) {
            newSearchParams.set("minBedrooms", searchParamsValues.minBedrooms);
          }

          newSearchParams.set("page", `${i + 1}`);

          return (
            <Button
              asChild={page !== i + 1}
              disabled={page === i + 1}
              variant="outline"
              key={i}
            >
              <Link href={`/property-search?${newSearchParams.toString()}`}>
                {i + 1}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  )
}