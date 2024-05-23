import { type SchemaTypeDefinition } from "sanity"
import homepage from "./schemas/singletons/homepage"
import page from "./schemas/documents/page"
import blog from "./schemas/documents/blog"
import blockContent from "./schemas/singletons/blockContent"
import category from "./schemas/singletons/category"
import author from "./schemas/singletons/author"
import settings from "./schemas/singletons/settings"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    page,
    blog,

    // Singletons
    homepage,
    blockContent,
    category,
    author,
    settings,
  ],
}
