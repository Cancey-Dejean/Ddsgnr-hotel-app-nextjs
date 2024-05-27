import { defineType } from "sanity"

export const pageSections = defineType({
  name: "pageSections",
  type: "object",
  fields: [
    {
      name: "sections",
      type: "array",
      title: "sections",
      of: [
        {
          name: "hero",
          type: "hero",
        },
      ],
    },
  ],
})
