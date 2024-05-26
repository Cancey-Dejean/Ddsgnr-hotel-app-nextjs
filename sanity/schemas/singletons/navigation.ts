import { IoHomeOutline } from "react-icons/io5"
import { Rule, defineType } from "sanity"

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  icon: IoHomeOutline,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Menu Title",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "menuList",
      type: "array",
      title: "Menu List",
      of: [{ type: "navItem" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "ctaButtons",
      type: "buttonGroup",
      title: "CTA Buttons",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        subtitle: "Navigation",
        title,
      }
    },
  },
})
