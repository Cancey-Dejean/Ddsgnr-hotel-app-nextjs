import { groq } from "next-sanity"
import { client } from "./client"

const ALL_SECTIONS_QUERY = `
...,
"slug": slug.current,
"ogImage": ogImage.asset->url,
"ogImageAlt": ogImage.alt,
pageBuilder {
  ...,
  sections [] {

    // Hero
    _type == "hero" => {
      ...,
      "mainImage": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,
    },

    // Booking Form
     _type == "bookingForm" => {
        ...,
     },

     // Start Vacation
     _type == "startVacation" => {
       ...,
       "videoImage": videoImage.asset->url,
       "videoImageAlt": videoImage.alt,
       ctaButtons
      },

      // Rooms
      _type == "rooms" => {
       ...,
       rooms [] {
         ...,
         roomReference-> {
           ...,
           "currentSlug": slug.current,
           "image": image.asset->url,
           "imageAlt": image.alt,
         },
        }
      },

      // Services
     _type == "services" => {
        ...,
        "videoImage": videoImage.asset->url,
        "videoImageAlt": videoImage.alt,
        perks [] {
          _key,
          icon,
          description,
          title,
        }
     },

     // Gallery
     _type == "gallery" => {
      ...,
      "imageOne": imageOne.asset->url,
      "imageOneAlt": imageOne.alt,
      "imageTwo": imageTwo.asset->url,
      "imageTwoAlt": imageTwo.alt,
      "imageThree": imageThree.asset->url,
      "imageThreeAlt": imageThree.alt,
      "imageFour": imageFour.asset->url,
      "imageFourAlt": imageFour.alt,
      Button {
        ...
      }
    },

    // Reviews
    _type == "reviews" => {
      ...,
      Reviews [] {
        ...,
        "videoImage": videoImage.asset->url,
        "videoImageAlt": videoImage.alt,
      }
    },



   }
 }
`

// Get settings
// export const settingsQuery = groq`
//  *[_type == "settings"][0]{
//    footer,
//    menuItems[]->{
//      _type,
//      "slug": slug.current,
//      title
//    },
//    ogImage,
//  }
// `

// Get Header Menu
export const MAIN_NAV_QUERY = groq`*[_type == "navigation" && title == "Main Menu" ][0] {
  ...,
  logoImage {
    logoText,
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

// Get all Rooms
export const ROOMS_QUERY = groq`*[_type == "room"] {
  ...,
}`

// Get all pages
export const PAGES_QUERY = groq`*[_type == "page"] {
  ...,
}`

// Get Single Page
export const PAGE_QUERY = groq`*[_type == "page" && slug.current == $slug][0] {
  ...,
}`

// Get Homepage
export const HOME_QUERY = groq`*[_type == "homepage"] {
  ...,
  ${ALL_SECTIONS_QUERY}
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
