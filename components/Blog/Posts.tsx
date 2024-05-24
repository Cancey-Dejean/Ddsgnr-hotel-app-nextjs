"use client"

import { urlForImage } from "@/sanity/lib/image"
import { SanityDocument } from "next-sanity"
import Image from "next/image"
import Link from "next/link"

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      <ul className="grid grid-cols-3 gap-8">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <li key={post._id}>
              <h2 className="p-4 hover:bg-blue-50">{post.title}</h2>
              <Image
                src={urlForImage(post.featuredImage)}
                alt={post.featuredImage.alt}
                width={1920}
                height={1080}
                className="object-cover"
              />
              <Link href={`/blog/${post.currentSlug}`}> Read More</Link>
            </li>
          ))
        ) : (
          <div className="p-4 text-red-500">No posts found</div>
        )}
      </ul>
    </main>
  )
}
