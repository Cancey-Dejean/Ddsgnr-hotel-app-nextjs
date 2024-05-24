import { defineType } from "sanity"
import { CiUser } from "react-icons/ci"

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: CiUser,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "customImage",
    },
    {
      name: "bio",
      title: "Bio",
      type: "bodyText",
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
})
