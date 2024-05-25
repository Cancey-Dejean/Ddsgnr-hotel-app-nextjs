import { IoHomeOutline } from "react-icons/io5"
import { defineType } from "sanity"

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: IoHomeOutline,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "menuList",
      type: "array",
      title: "Menu List",
      of: [{ type: "navItem" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "Navigation",
        title,
      }
    },
  },
})
