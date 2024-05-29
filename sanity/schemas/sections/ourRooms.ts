import { defineType } from "sanity"
import { Rule } from "sanity"

export const rooms = defineType({
  name: "rooms",
  type: "object",
  title: "Our Rooms",
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
