import BlogList from "@/components/Blog/BlogList"
import { getPosts, getTotalPosts } from "@/sanity/lib/queries"
import { PostProps } from "@/types/Post"

import { Link } from "next-view-transitions"

// export default async function BlogIndex() {
//   const posts: PostProps[] = await getPosts()
//   const numberOfPosts = await getTotalPosts()
//   console.log(numberOfPosts)

//   console.log(posts)
//   return (
//     <div className="max-w-7xl mx-auto">
//       <ul className="">
//         <BlogList posts={posts} />
//       </ul>
//     </div>
//   )
// }

import { sanityFetch } from "@/sanity/lib/fetch"
import { POSTS_QUERY } from "@/sanity/lib/queries"
import Posts from "@/components/Blog/Posts"

export default async function Page() {
  const posts = await sanityFetch<PostProps[]>({
    query: POSTS_QUERY,
  })

  return <Posts posts={posts} />
}
