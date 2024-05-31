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
      name: "logoImage",
      type: "logo",
      title: "Logo",
    },
    {
      name: "menuPosition",
      title: "Menu Position",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
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
  initialValue: {
    menuPosition: "left",
  },
})
