import { Rule, defineType } from "sanity"

import { GrNotes } from "react-icons/gr"

export const cardPerk = defineType({
  name: "cardPerk",
  type: "object",
  title: "Perk",
  icon: GrNotes,
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: [
          { title: "Swimmer", value: "LiaSwimmerSolid" },
          { title: "Massage", value: "TbMassage" },
          { title: "Gym", value: "CgGym" },
          { title: "Food", value: "MdOutlineFoodBank" },
        ],
      },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
        subtitle: "Perk",
      }
    },
  },
  initialValue: {
    title: "Services",
    description: "The description goes here...",
    icon: "MdOutlineFoodBank",
  },
})
