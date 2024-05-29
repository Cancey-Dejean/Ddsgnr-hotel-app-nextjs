import Image from "next/image"
import Paragraph from "../Paragraph"
import SectionTitle from "../SectionTitle"
import { twMerge } from "tailwind-merge"
import ButtonLink from "../ButtonLink"
import { cn } from "@/lib/utils"
import { PortableText } from "next-sanity"
import { CardRoomProps } from "@/types/CardRoomProps"
import { Button } from "../ui/button"

const CardRoom = ({
  featured,
  image,
  imageAlt,
  title,
  description,
  price,
  className,
  buttonLabel,
  roomReference,
}: CardRoomProps) => {
  return (
    <div
      className={cn(
        "group flex mx-auto  flex-col items-center justify-between overflow-hidden rounded-[10px] border-[0.5px] border-color-border",
        // featured ? "lg:max-w-[400px]" : "lg:max-w-[900px]",
        className
      )}
    >
      <div className={cn("overflow-hidden w-full flex-1")}>
        <Image
          src={roomReference.image || ""}
          width={640}
          height={488}
          className={cn(
            "w-full h-full object-cover lg:group-hover:scale-110 transition-all duration-300 ease-in-out"
          )}
          alt={roomReference.imageAlt || "room image"}
        />
      </div>

      <div
        className={cn(
          "flex w-full flex-col justify-center",
          roomReference.featured ? "px-6 py-6" : "px-8 py-8 sm:px-12"
        )}
      >
        <div className="flex flex-col">
          <SectionTitle
            className={cn(
              "text-[22px] leading-[32px]",
              roomReference.featured
                ? "text-[40px] leading-[48px]"
                : "text-[22px] leading-[32px]"
            )}
          >
            {roomReference.title}
          </SectionTitle>

          <div
            className={cn(
              "w-full",
              roomReference.featured ? "mt-2 text-[15px]" : "mt-6"
            )}
          >
            <PortableText value={roomReference.description} />
          </div>
        </div>

        <div
          className={cn(
            "flex items-center gap-4",
            roomReference.featured ? "mt-6" : "mt-8"
          )}
        >
          <Button>${roomReference.price}/night</Button>
          <Button>{roomReference.buttonLabel || "View room"}</Button>
        </div>
      </div>
    </div>
  )
}

export default CardRoom
