import { ButtonProps } from "@/components/ui/button"
import { PortableTextBlock } from "next-sanity"
// import { PortableTextBlock } from "sanity"

export type HeroProps = {
  /**
   * Description goes here
   */
  title: string
  description?: any
  mainImage?: string
  ctaButtons: ButtonProps[]
}
