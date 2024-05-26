import { defineType } from "sanity"

export const navItem = defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "url",
      type: "link",
      title: "Url",
    },
  ],
  initialValue: {
    label: "Button",
  },
})
