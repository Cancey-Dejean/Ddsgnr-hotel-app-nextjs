import { defineType } from "sanity"

export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "customImage",
    },
  ],
})
