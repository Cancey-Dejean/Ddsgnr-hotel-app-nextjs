import { groq } from "next-sanity"
import { client } from "./client"

// Get settings
export const settingsQuery = groq`
  // *[_type == "settings"][0]{
  //   footer,
  //   menuItems[]->{
  //     _type,
  //     "slug": slug.current,
  //     title
  //   },
  //   ogImage,
  // }
`

// Get Header Menu
export const MAIN_NAV_QUERY = groq`*[_type == "navigation" && title == "Main Menu" ][0] {
  ...,
  logoImage {
    "brandLogo": brandLogo.asset->url,
    "brandLogoAlt": brandLogo.alt,
  },

  menuList[] {
    _type == 'navItem'  => {
      _key,
      label,
    }
  },
  ctaButtons [] {
    _type == 'button'  => {
      _key,
      variant,
      label,
    }
  }
}`

// Get all posts
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

// Get single post
export const POST_QUERY = groq`*[_type == "blog" && slug.current == $slug][0] {
  _createdAt,
  body,
  featuredImage,
  // "featuredImage": featuredImage.asset->url,
  "featuredImageAlt": featuredImage.alt,
    _id,
  title,
  excerpt,
  "currentSlug": slug.current,
}`

// Get all categories
export const ALL_CATEGORIES_QUERY = groq`*[_type == "category"] {
  _id,
  title,
  "categorySlug": slug.current,
  image,
  description,
  "postCount": count(*[_type == 'blog' && references("categories", ^._id)])
}`

export const getTotalPosts = async () => {
  const query = groq`count(*[_type == 'blog'])`
  return client.fetch(query)
}
