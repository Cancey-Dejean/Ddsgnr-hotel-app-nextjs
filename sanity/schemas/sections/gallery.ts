import { defineType } from "sanity"
import { Rule } from "sanity"

export const gallery = defineType({
  name: "gallery",
  type: "object",
  title: "Gallery",
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
      name: "imageOne",
      title: "Image One",
      type: "customImage",
    },
    {
      name: "imageTwo",
      title: "Image Two",
      type: "customImage",
    },
    {
      name: "imageThree",
      title: "Image Three",
      type: "customImage",
    },
    {
      name: "imageFour",
      title: "Image Four",
      type: "customImage",
    },
    {
      name: "Button",
      type: "button",
      title: "Button",
    },
  ],
  initialValue: {
    title: "Title",
  },
})
