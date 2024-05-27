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
          { title: "White", value: "white" },
          { title: "Destructive", value: "destructive" },
          { title: "Outline", value: "outline" },
          { title: "Outline White", value: "outlineWhite" },
          { title: "Secondary", value: "secondary" },
          { title: "Ghost", value: "ghost" },
          { title: "Link", value: "link" },
        ],
      },
    },
  ],
  initialValue: {
    label: "Button",
    variant: "default",
  },
})
