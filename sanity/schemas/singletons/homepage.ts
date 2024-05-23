import { IoHomeOutline } from "react-icons/io5"
import { defineField, defineType } from "sanity"

export default defineType({
  name: "homepage",
  title: "HomePage",
  type: "document",
  icon: IoHomeOutline,
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "pageBuilder",
      title: "Page Builder",
    },
  ],
  fields: [
    {
      name: "title",
      description: "This field is the title of your personal website.",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
      group: "seo",
    },
    // defineField({
    //   name: "metaDescription",
    //   description:
    //     "Used both for the <meta> description tag for SEO, and the personal website subheader.",
    //   title: "Meta Description",
    //   type: "blockContent",
    //   group: "seo",
    // }),
    // defineField({
    //   name: "sections",
    //   type: "array",
    //   title: "Sections",
    //   of: [],
    //   group: "pageBuilder",
    // }),
  ],
  preview: {
    select: {
      title: "metaTitle",
    },
    prepare({ title }) {
      return {
        subtitle: "Home",
        title,
      }
    },
  },
})
