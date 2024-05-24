import { defineType } from "sanity"
import { FaCog } from "react-icons/fa"

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: FaCog,
  fields: [
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      description: "Displayed on social cards and search engine results.",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Menu Items",
      }
    },
  },
})
