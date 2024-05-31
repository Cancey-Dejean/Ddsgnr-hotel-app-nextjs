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
        {
          name: "bookingForm",
          type: "bookingForm",
        },
        {
          name: "startVacation",
          type: "startVacation",
        },
        {
          name: "rooms",
          type: "rooms",
        },
        {
          name: "services",
          type: "services",
        },
        {
          name: "gallery",
          type: "gallery",
        },
        {
          name: "reviews",
          type: "reviews",
        },
      ],
    },
  ],
})
