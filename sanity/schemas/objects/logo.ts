import { defineType } from "sanity"

export const logo = defineType({
  name: "logo",
  title: "Logo",
  type: "object",
  fields: [
    {
      name: "logoImage",
      type: "customImage",
      title: "Image",
    },
    {
      name: "url",
      type: "link",
      title: "Url",
    },
  ],
})