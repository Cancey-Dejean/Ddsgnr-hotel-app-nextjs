import { defineType } from "sanity"
import { Rule } from "sanity"

export const startVacation = defineType({
  name: "startVacation",
  type: "object",
  title: "Start Vacation",
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
      name: "description",
      title: "Description",
      type: "bodyText",
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
      name: "ctaButtons",
      type: "buttonGroup",
      title: "CTA Buttons",
    },
  ],
  initialValue: {
    title: "Embark on an unforgettable journey with extraordinary experiences.",
    youtubeVideoId: "NpEaa2P7qZI",
  },
})
