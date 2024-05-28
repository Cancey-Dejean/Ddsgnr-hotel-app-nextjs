import { Rule, defineType } from "sanity"
import { CiUser } from "react-icons/ci"

export default defineType({
  name: "room",
  title: "Room",
  type: "document",
  icon: CiUser,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "customImage",
    },
    {
      name: "description",
      title: "Description",
      type: "bodyText",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: Rule) => Rule.min(1),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "Room",
        title,
      }
    },
  },
})
