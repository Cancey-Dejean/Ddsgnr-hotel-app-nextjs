import { type SchemaTypeDefinition } from "sanity"
import homepage from "./schemas/singletons/homepage"
import page from "./schemas/documents/page"
import blog from "./schemas/documents/blog"

import category from "./schemas/singletons/category"
import author from "./schemas/singletons/author"
import settings from "./schemas/singletons/settings"
import { youtube } from "./schemas/objects/youtube"
import { customImage } from "./schemas/objects/customImage"
import { bodyText } from "./schemas/objects/bodyText"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    blog,

    // Objects
    customImage,
    bodyText,

    // Singletons
    homepage,
    category,
    author,
    settings,
    youtube,
  ],
}
