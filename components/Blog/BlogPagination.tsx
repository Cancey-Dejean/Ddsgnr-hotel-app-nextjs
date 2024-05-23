import { getPosts } from "@/sanity/lib/queries"

export default async function BlogPagination() {
  const posts = await getPosts()

  console.log(posts)
  return <div>BlogPagination</div>
}
