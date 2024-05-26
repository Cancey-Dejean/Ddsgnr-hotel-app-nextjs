// ./app/(blog)/[slug]/page.tsx

import { QueryParams, SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"

import { PAGES_QUERY, PAGE_QUERY } from "@/sanity/lib/queries"
// import Post from "@/components/Post"

import { sanityFetch } from "@/sanity/lib/fetch"
import Post from "@/components/Blog/Post"

export async function generateStaticParams() {
  const pages = await sanityFetch<SanityDocument[]>({
    query: PAGES_QUERY,
    perspective: "published",
    stega: false,
  })

  return pages.map((page) => ({
    slug: page.currentSlug,
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  const page = await sanityFetch<SanityDocument>({ query: PAGE_QUERY, params })

  console.log(page)
  if (!page) {
    return notFound()
  }

  // if (page. === "page") {
  //   return <p>Homepage</p>
  // }
  // return <Post post={post} />
  return <p>No content on the page</p>
}
