import { getUserFavourites } from "@/data/favourites"
import { getPropertiesById } from "@/data/properties"

export default async function MyFavourites({
  searchParams
}: {
  searchParams?: Promise<any>
}) {
  const searchParamsValue = await searchParams
  const page = searchParamsValue?.page ? parseInt(searchParamsValue.page) : 1
  const pageSize = 2
  const favourites = await getUserFavourites()
  const allFavourites = Object.keys(favourites)
  const totalPages = Math.ceil(allFavourites.length / pageSize)

  const paginatedFavourites = allFavourites.slice((page - 1) * pageSize, page * pageSize)

  const properties = await getPropertiesById(paginatedFavourites)
  console.log({ paginatedFavourites, properties })

  return (
    <div>My Favourites</div>
  )
}