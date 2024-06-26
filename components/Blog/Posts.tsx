"use client"

import { urlForImage } from "@/sanity/lib/image"
import { SanityDocument } from "next-sanity"
import Image from "next/image"
import { Link } from "next-view-transitions"
import { useState } from "react"
import PostCard from "./PostCard"
import { Button } from "../ui/button"
import { PostProps } from "@/types/Post"

export default function Posts({ posts }: { posts: PostProps[] }) {
  const articlesShown = 3
  const [loadMore, setLoadMore] = useState(articlesShown)
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown)
  }

  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      <ul className="grid grid-cols-3 gap-8">
        {posts?.length > 0 ? (
          posts.slice(0, loadMore).map((post) => (
            <li key={post._id}>
              <PostCard {...post} />
              {/* <h2 className="p-4 hover:bg-blue-50">{post.title}</h2> */}
              {/* <Image
                src={urlForImage(post.featuredImage)}
                alt={post.featuredImage.alt}
                width={1920}
                height={1080}
                className="object-cover"
              /> */}
            </li>
          ))
        ) : (
          <div className="p-4 text-red-500">No posts found</div>
        )}
      </ul>

      <div className=" text-center mt-8">
        {loadMore < posts?.length ? (
          <Button onClick={showMoreArticles}>Load More Articles</Button>
        ) : (
          <Button
            className="flex justify-center mt-8"
            onClick={showMoreArticles}
            disabled
          >
            End of Blog List
          </Button>
        )}
      </div>

      {loadMore < posts?.length && (
        <p className="flex justify-center mt-8">
          Showing {loadMore} of {posts?.length} articles
        </p>
      )}
    </main>
  )
}
