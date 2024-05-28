import { defineType } from "sanity"
import { Rule } from "sanity"

export const rooms = defineType({
  name: "rooms",
  type: "object",
  title: "Rooms",
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
  ],
  initialValue: {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    mainImage: "https://dummyimage.com/1440x960.png/dddddd/ffffff",
  },
})
