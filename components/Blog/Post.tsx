// ./components/Post.tsx

import Image from "next/image"
import { PortableText } from "next-sanity"
import { SanityDocument } from "next-sanity"
import { urlForImage } from "@/sanity/lib/image"
import { blockImageRenderer } from "@/utils"

export default function Post({ post }: { post: SanityDocument }) {
  const { title, featuredImage, body, excerpt } = post

  return (
    <article className="prose max-w-3xl mx-auto py-20">
      {title ? <h1>{title}</h1> : null}
      {excerpt ? <p>{excerpt}</p> : null}
      {featuredImage ? (
        <Image
          className="object-cover"
          src={urlForImage(featuredImage)}
          width={1920}
          height={1080}
          alt={featuredImage.alt || ""}
        />
      ) : null}
      {body ? (
        <PortableText value={body} components={blockImageRenderer} />
      ) : null}
    </article>
  )
}
