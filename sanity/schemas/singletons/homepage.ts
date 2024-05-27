import { IoHomeOutline } from "react-icons/io5"
import { defineType } from "sanity"

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
        source: "metaTitle",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
      group: "seo",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      description:
        "Used both for the <meta> description tag for SEO, and the personal website subheader.",
      type: "array",
      of: [
        {
          lists: [],
          marks: {
            annotations: [],
            decorators: [
              {
                title: "Italic",
                value: "em",
              },
              {
                title: "Strong",
                value: "strong",
              },
            ],
          },
          styles: [],
          type: "block",
        },
      ],
      validation: (rule) => rule.max(155).required(),
      group: "seo",
    },
    {
      name: "ogImage",
      title: "OG Image",
      type: "customImage",
      group: "seo",
    },
    {
      name: "pageBuilder",
      title: "Page Builder",
      type: "pageSections",
      group: "pageBuilder",
    },
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
