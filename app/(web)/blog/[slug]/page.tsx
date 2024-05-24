// ./app/(blog)/[slug]/page.tsx

import { QueryParams, SanityDocument } from "next-sanity"
import { notFound } from "next/navigation"

import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries"
// import Post from "@/components/Post"

import { sanityFetch } from "@/sanity/lib/fetch"
import Post from "@/components/Blog/Post"

export async function generateStaticParams() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
    perspective: "published",
    stega: false,
  })

  return posts.map((post) => ({
    slug: post.currentSlug,
  }))
}

export default async function Page({ params }: { params: QueryParams }) {
  const post = await sanityFetch<SanityDocument>({ query: POST_QUERY, params })
  if (!post) {
    return notFound()
  }
  return <Post post={post} />
}
