import { type SchemaTypeDefinition } from "sanity"
import homepage from "./schemas/singletons/homepage"
import page from "./schemas/documents/page"
import blog from "./schemas/documents/blog"

import category from "./schemas/singletons/category"
import author from "./schemas/singletons/author"
import { youtube } from "./schemas/objects/youtube"
import { customImage } from "./schemas/objects/customImage"
import { bodyText } from "./schemas/objects/bodyText"
import { excerpt } from "./schemas/objects/excerpt"
import siteSettings from "./schemas/singletons/siteSettings"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    blog,

    // Objects
    customImage,
    bodyText,
    excerpt,

    // Singletons
    homepage,
    category,
    author,
    siteSettings,
    youtube,
  ],
}
