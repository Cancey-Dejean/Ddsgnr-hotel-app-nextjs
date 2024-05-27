import { defineType } from "sanity"

export const pageSections = defineType({
  name: "pageSections",
  type: "object",
  fields: [
    {
      name: "hello",
      type: "array",
      title: "hello",
      of: [
        {
          name: "hero",
          type: "hero",
        },
      ],
    },
  ],
})
