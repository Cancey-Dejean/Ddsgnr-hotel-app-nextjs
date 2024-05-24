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
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
})
