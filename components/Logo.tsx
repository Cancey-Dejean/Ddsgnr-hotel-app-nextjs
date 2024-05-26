import Image from "next/image"
import { Link } from "next-view-transitions"
import { cn } from "@/lib/utils"
import { urlFor, urlForImage } from "@/sanity/lib/image"

const Logo = ({
  className,
  url = "/",
  logoText,
  logoSrc,
  imgAlt,
}: {
  className?: string
  url?: string
  logoText?: string
  logoSrc?: string
  imgAlt: string
}) => {
  return (
    <Link href={url} className={cn("flex items-center gap-[7px]", className)}>
      {logoSrc !== null ? (
        <div className="relative h-[31px] w-[34px]">
          <Image
            // src={urlForImage(logoSrc as any)}
            src={logoSrc as any}
            className={cn("object-contain", className)}
            alt={imgAlt}
            fill
          />
        </div>
      ) : null}

      {logoText !== null && <p className="text-[25px] font-bold">{logoText}</p>}
    </Link>
  )
}

export default Logo
