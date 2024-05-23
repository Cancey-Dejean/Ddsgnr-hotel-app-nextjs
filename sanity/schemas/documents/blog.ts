import { IoHomeOutline } from "react-icons/io5"
import { defineField, defineType } from "sanity"

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  icon: IoHomeOutline,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
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
    defineField({
      name: "title",
      description: "This field is the title of your project.",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
      group: "seo",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
      group: "seo",
    }),
    defineField({
      name: "excerpt",
      description:
        "Used both for the <meta> description tag for SEO, and project subheader.",
      title: "Excerpt",
      type: "text",
      validation: (rule) => rule.max(155).required(),
      group: "seo",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      description: "This image will be used as the cover image for the post.",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
      validation: (rule) => rule.required(),
      group: "content",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
      group: "content",
    }),
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
