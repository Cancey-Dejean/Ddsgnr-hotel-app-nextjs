import { defineType } from "sanity"

export const pageSections = defineType({
  name: "pageSections",
  type: "object",
  fields: [
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        {
          name: "hero",
          type: "hero",
        },
      ],
    },
  ],
})
