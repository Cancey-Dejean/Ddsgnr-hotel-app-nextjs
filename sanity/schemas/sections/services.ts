import { defineType } from "sanity"
import { Rule } from "sanity"

export const services = defineType({
  name: "services",
  type: "object",
  title: "Services",
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
      name: "videoImage",
      title: "Video Image",
      type: "customImage",
    },
    {
      name: "youtubeVideoId",
      title: "Youtube Video ID",
      type: "string",
    },
    {
      name: "perks",
      title: "Perks",
      type: "array",
      of: [
        {
          name: "cardPerk",
          type: "cardPerk",
        },
      ],
    },
    {
      name: "ctaButtons",
      type: "buttonGroup",
      title: "CTA Buttons",
    },
  ],
  initialValue: {
    title: "Services",
    youtubeVideoId: "NpEaa2P7qZI",
  },
})
