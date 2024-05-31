import { defineType } from "sanity"

export const review = defineType({
  name: "review",
  title: "Review",
  type: "object",
  fields: [
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
      name: "quote",
      type: "text",
      title: "Quote",
    },
    {
      name: "reviewerName",
      type: "string",
      title: "Reviewer Name",
    },
  ],
  initialValue: {
    reviewerName: "John Doe",
    youtubeVideoId: "NpEaa2P7qZI",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
})
