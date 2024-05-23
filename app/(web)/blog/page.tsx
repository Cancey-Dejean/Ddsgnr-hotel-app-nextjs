import BlogList from "@/components/Blog/BlogList"
import { PaginationBlock } from "@/components/Pagination"
import PostCard from "@/components/PostCard"
import { getPosts, getTotalPosts } from "@/sanity/lib/queries"
import { PostProps } from "@/types/Post"

export default async function BlogIndex() {
  const posts: PostProps[] = await getPosts()
  const numberOfPosts = await getTotalPosts()
  console.log(numberOfPosts)

  console.log(posts)
  return (
    <div className="max-w-7xl mx-auto">
      <ul className="">
        <BlogList posts={posts} />
      </ul>
    </div>
  )
}
