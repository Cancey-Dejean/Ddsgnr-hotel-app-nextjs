import { IoHomeOutline } from "react-icons/io5"
import { defineArrayMember, defineField, defineType } from "sanity"

export default defineType({
  type: "document",
  name: "page",
  title: "Page",
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
      type: "string",
      name: "metaTitle",
      title: "Title",
      validation: (rule) => rule.required(),
      group: "seo",
    },
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
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
    //   name: "body",
    //   description:
    //     "This is where you can write the page's content. Including custom blocks like timelines for more a more visual display of information.",
    //   title: "Body",
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
        subtitle: "Page",
        title,
      }
    },
  },
})
