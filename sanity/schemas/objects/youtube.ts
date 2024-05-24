import { defineType } from "sanity"

import { IoLogoYoutube } from "react-icons/io"

export const youtube = defineType({
  name: "youtube",
  type: "object",
  title: "YouTube Embed",
  icon: IoLogoYoutube,
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube video URL",
    },
  ],
})
