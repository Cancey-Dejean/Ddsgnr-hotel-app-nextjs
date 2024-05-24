import { IoHomeOutline } from "react-icons/io5"
import { defineField, defineType } from "sanity"

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: IoHomeOutline,
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "content",
      title: "Blog Content",
    },
  ],
  fields: [
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      group: "content",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
      group: "content",
    },
    {
      name: "title",
      description: "This field is the title of your project.",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
      group: "seo",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
      group: "seo",
    },
    {
      name: "excerpt",
      type: "text",
      description:
        "Used both for the <meta> description tag for SEO, and project subheader.",
      group: "seo",
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "customImage",
      group: "content",
    },
    {
      name: "body",
      title: "Body",
      type: "bodyText",
      group: "content",
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "featuredImage",
    },
    prepare({ title, image }) {
      return {
        title,
        media: image,
      }
    },
  },
})
