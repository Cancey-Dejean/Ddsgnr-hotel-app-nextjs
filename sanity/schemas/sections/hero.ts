import { defineType } from "sanity"
import { Rule } from "sanity"

export const hero = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "bodyText",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "customImage",
    },
    {
      name: "ctaButtons",
      type: "buttonGroup",
      title: "CTA Buttons",
    },
  ],
})
