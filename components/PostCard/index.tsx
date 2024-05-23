import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PostProps } from "@/types/Post"
import Image from "next/image"

export default function PostCard({
  title,
  excerpt,
  featuredImage,
  featuredImageAlt,
}: PostProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video">
          <Image
            src={featuredImage}
            alt={featuredImageAlt}
            fill
            className="object-cover"
          />
        </div>
      </CardContent>
    </Card>
  )
}
