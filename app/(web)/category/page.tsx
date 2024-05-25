import { sanityFetch } from "@/sanity/lib/fetch"
import { ALL_CATEGORIES_QUERY } from "@/sanity/lib/queries"
import { CategoryProps } from "@/types/Category"
import Categories from "@/components/Category/Categories"

export default async function Page() {
  const categories = await sanityFetch<CategoryProps[]>({
    query: ALL_CATEGORIES_QUERY,
  })

  return <Categories categories={categories} />
}
