import { defineType } from "sanity"

export const logo = defineType({
  name: "logo",
  title: "Logo",
  type: "object",
  fields: [
    {
      name: "brandLogo",
      type: "customImage",
      title: "Image",
    },
    {
      name: "logoText",
      type: "string",
      title: "Logo Text",
    },
    {
      name: "url",
      type: "link",
      title: "Url",
    },
  ],
  initialValue: {
    logoText: "Logo",
  },
})
