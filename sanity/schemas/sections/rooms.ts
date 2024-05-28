import { defineType } from "sanity"
import { Rule } from "sanity"

export const rooms = defineType({
  name: "rooms",
  type: "object",
  title: "Rooms",
  fields: [
    {
      name: "hideSection",
      title: "Hide Section",
      type: "hideSection",
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
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "room" } }],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: "rooms",
      title: "Rooms",
      type: "array",
      of: [
        {
          name: "roomItems",
          type: "cardRoom",
        },
      ],
    },
  ],
  initialValue: {},
})
