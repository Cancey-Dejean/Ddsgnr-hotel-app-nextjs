import { Rule, defineType } from "sanity"

import { GrNotes } from "react-icons/gr"

export const cardRoom = defineType({
  name: "cardRoom",
  type: "object",
  title: "Room Card",
  icon: GrNotes,
  fields: [
    {
      name: "featured",
      title: "Featured Room",
      type: "boolean",
      description: "If true, this will be the featured room",
    },
    {
      name: "roomReference",
      title: "Room Reference",
      type: "reference",
      to: [{ type: "room" }],
    },
    {
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
    },
  ],
  preview: {
    select: {
      reference: "title",
    },
    prepare({ reference }) {
      return {
        reference,
        subtitle: "Room",
      }
    },
  },
})
