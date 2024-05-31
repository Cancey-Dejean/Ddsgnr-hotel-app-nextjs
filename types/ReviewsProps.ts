import { ButtonProps } from "@/components/ui/button"
import { VideoImageProps } from "./VideoImageProps"

export type Review = {
  _key?: string
  youtubeVideoId?: VideoImageProps
  videoImage?: VideoImageProps
  videoImageAlt?: VideoImageProps
  reviewerName?: string
  quote?: string
}
export type ReviewsProps = {
  Reviews?: Review
}
