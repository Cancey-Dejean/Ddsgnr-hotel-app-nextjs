import { Rule, defineType } from "sanity"

import { GrNotes } from "react-icons/gr"

export const cardRoom = defineType({
  name: "cardRoom",
  type: "object",
  title: "Room Card",
  icon: GrNotes,
  fields: [
    {
      name: "featured",
      title: "Featured Room",
      type: "boolean",
      description: "If true, this will be the featured room",
    },
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
      validation: (Rule: Rule) => Rule.min(1),
    },
    {
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
    },
    {
      name: "buttonLink",
      title: "Link",
      type: "button",
    },
  ],
})
