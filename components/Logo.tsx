import Image from "next/image"
import { Link } from "next-view-transitions"
import { twMerge } from "tailwind-merge"

const Logo = ({
  className = "",
  url = "",
  text = "",
  imgSrc = "",
  imgAlt = "Logo",
  showMenu,
}: {
  className?: string
  url?: string
  text?: string
  imgSrc?: string
  imgAlt?: string
  showMenu?: boolean
}) => {
  return (
    <Link href={url} className="flex items-center gap-[7px]">
      {imgSrc !== "" ? (
        <Image
          src={imgSrc}
          className={twMerge("h-[31px] w-[34px] object-contain", className)}
          alt={imgAlt}
          width={34}
          height={31}
        />
      ) : null}

      {text !== "" ? <p className="text-[25px] font-bold">{text}</p> : null}
    </Link>
  )
}

export default Logo
