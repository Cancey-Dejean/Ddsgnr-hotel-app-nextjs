import { PostProps } from "@/types/Post"
import { sanityFetch } from "@/sanity/lib/fetch"
import { POSTS_QUERY } from "@/sanity/lib/queries"
import Posts from "@/components/Blog/Posts"

export default async function Page() {
  const posts = await sanityFetch<PostProps[]>({
    query: POSTS_QUERY,
  })

  return <Posts posts={posts} />
}
