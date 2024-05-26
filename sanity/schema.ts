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
import header from "./schemas/singletons/header"
import navigation from "./schemas/singletons/navigation"
import { link } from "./schemas/objects/link"
import { navItem } from "./schemas/objects/navItem"
import { button } from "./schemas/objects/button"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    blog,
    navigation,

    // Objects
    customImage,
    bodyText,
    excerpt,
    link,
    navItem,

    // Singletons
    homepage,
    category,
    author,
    siteSettings,
    header,
    youtube,
    button,
  ],
}
