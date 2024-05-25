import { defineType } from "sanity"

export default defineType({
  name: "footer",
  title: "footer",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "customImage",
    },
  ],
})
