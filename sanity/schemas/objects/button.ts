import { defineType } from "sanity"

export const button = defineType({
  name: "button",
  title: "Button",
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
    {
      name: "variant",
      type: "string",
      title: "Variant",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Destructive", value: "destructive" },
          { title: "Outline", value: "outline" },
          { title: "Secondary", value: "secondary" },
          { title: "Ghost", value: "ghost" },
          { title: "Link", value: "link" },
        ],
      },
    },
  ],
})
