import { defineType } from "sanity"
import { Rule } from "sanity"

export const reviews = defineType({
  name: "reviews",
  type: "object",
  title: "Reviews",
  fields: [
    {
      name: "hideSection",
      title: "Hide Section",
      type: "hideSection",
    },
    {
      name: "title",
      title: "Reviews",
      type: "string",
      readOnly: true,
    },
    {
      name: "Reviews",
      title: "Image One",
      type: "array",
      of: [
        {
          name: "review",
          type: "review",
        },
      ],
    },
  ],
  initialValue: {
    title: "Reviews",
  },
})
