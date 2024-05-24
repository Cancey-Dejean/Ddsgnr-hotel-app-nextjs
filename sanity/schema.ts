import { type SchemaTypeDefinition } from "sanity"
import homepage from "./schemas/singletons/homepage"
import page from "./schemas/documents/page"
import blog from "./schemas/documents/blog"

import category from "./schemas/singletons/category"
import author from "./schemas/singletons/author"
import settings from "./schemas/singletons/settings"
import { youtube } from "./schemas/objects/youtube"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    blog,

    // Singletons
    homepage,
    category,
    author,
    settings,
    youtube,
  ],
}
