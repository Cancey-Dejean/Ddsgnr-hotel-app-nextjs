import { defineType } from "sanity"

export const navItem = defineType({
  name: "navItem",
  title: "Navigation Item",
  type: "object",
  fields: [
    {
      name: "text",
      type: "string",
      title: "Navigation Text",
    },
    {
      name: "navigationItemUrl",
      type: "link",
      title: "Navigation Item URL",
    },
  ],
})
