// ./app/(blog)/[slug]/page.tsx

import { QueryParams, SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"

import { HOME_QUERY, PAGES_QUERY, PAGE_QUERY } from "@/sanity/lib/queries"
// import Post from "@/components/Post"

import { sanityFetch } from "@/sanity/lib/fetch"
import Post from "@/components/Blog/Post"
import { PageContent } from "@/components/PageContent"

export default async function Page() {
  const page = await sanityFetch<SanityDocument>({ query: HOME_QUERY })
  console.log(page[0].pageBuilder.sections)

  // if (page.currentSlug !== params.slug) {
  //   return notFound()
  // }

  // if (!page) {
  //   return notFound()
  // }

  return <>{page[0].pageBuilder.sections.map(PageContent)}</>
}
