import { defineType } from "sanity"

export default defineType({
  name: "footer",
  title: "footer",
  type: "document",
  fields: [
    {
      name: "logoImage",
      type: "logo",
      title: "Logo",
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "url",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "url",
    },
    {
      name: "twitter",
      title: "Twitter",
      type: "url",
    },
    {
      name: "linkedin",
      title: "Linkedin",
      type: "url",
    },
  ],
})
