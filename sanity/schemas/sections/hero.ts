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
  initialValue: {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: "https://dummyimage.com/1440x960.png/dddddd/ffffff",
  },
})
