import { defineType } from "sanity"

import { GrNotes } from "react-icons/gr"

export const cardRoom = defineType({
  name: "cardRoom",
  type: "object",
  title: "Room Card",
  icon: GrNotes,
  fields: [
    {
      name: "image",
      title: "Image",
      type: "customImage",
    },
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
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "ctaButtons",
      type: "buttonGroup",
      title: "CTA Buttons",
    },
  ],
})
