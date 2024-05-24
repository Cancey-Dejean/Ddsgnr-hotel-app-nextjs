import { groq } from "next-sanity"
import { client } from "./client"

// Live Mode
export const POSTS_QUERY = groq`*[_type == "blog"]  | order(_createdAt desc) {
  _id,
  title,
  excerpt,
  _createdAt,
  "currentSlug": slug.current,
  featuredImage,
  // "featuredImage": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt
}`

export const POST_QUERY = groq`*[_type == "blog" && slug.current == $slug][0] {
  _createdAt,
  content,
  featuredImage,
  // "featuredImage": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
    _id,
  title,
  excerpt,
  "currentSlug": slug.current,
}`
// Live Mode

export const homePageQuery = groq`
  *[_type == "home"][0] {
    title,
    metaDescription,
    sections[] {
      _type == "hero" => {
        ...,
        "mainImage": mainImage.asset->url,
        "mainImageAlt": mainImage.alt,
      },
    }
  }
`

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    metaDescription,
    title,
    "slug": slug.current,
  }
`

// Get All Blog Posts
// export const getPosts = async () => {
//   const query = groq`
//   *[_type == "blog"] | order(_createdAt desc) [0...2] {
//     _id,
//     title,
//     excerpt,
//     _createdAt,
//     "currentSlug": slug.current,
//     "featuredImage": featuredImage.asset->url,
//     "featuredImageAlt": featuredImage.alt,
//   }
// `

//   const data = await client.fetch(query)

//   return data
// }

export const getPosts = async () => {
  const query = groq`*[_type == 'blog'] | order(_createdAt desc) {
      _id,
      title,
      excerpt,
      _createdAt,
      "currentSlug": slug.current,
      "featuredImage": featuredImage.asset->url,
      "featuredImageAlt": featuredImage.alt,
  }`
  return client.fetch(query)
}

export const getTotalPosts = async () => {
  const query = groq`count(*[_type == 'blog'])`
  return client.fetch(query)
}

// Blog Page
export const blogBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    ...,
    title,
    body,
    excerpt,
    _createdAt,
    _updatedAt,
    "featuredImage": featuredImage.asset->url,
    "featuredImageAlt": featuredImage.alt,
    "author": author->name
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
