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
      },
      validation: (rule) => rule.required(),
      group: "seo",
    },
    {
      name: "excerpt",
      description:
        "Used both for the <meta> description tag for SEO, and project subheader.",
      title: "Excerpt",
      type: "text",
      validation: (rule) => rule.max(155).required(),
      group: "seo",
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
      group: "content",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
        { type: "youtube" },
      ],
      group: "content",
    },
    // defineField({
    //   name: "author",
    //   title: "Author",
    //   type: "reference",
    //   to: { type: "author" },
    // }),
    // defineField({
    //   name: "tags",
    //   title: "Tags",
    //   type: "array",
    //   of: [{ type: "string" }],
    //   options: {
    //     layout: "tags",
    //   },
    // }),
  ],
})
