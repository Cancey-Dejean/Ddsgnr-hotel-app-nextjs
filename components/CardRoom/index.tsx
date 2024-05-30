import Image from "next/image"
import SectionTitle from "../SectionTitle"
import { cn } from "@/lib/utils"
import { PortableText } from "next-sanity"
import { CardRoomProps } from "@/types/CardRoomProps"
import { Button } from "../ui/button"
import { LiaAngleRightSolid } from "react-icons/lia"

const CardRoom = ({ featured, className, roomReference }: CardRoomProps) => {
  return (
    <div
      className={cn(
        "group flex w-full  flex-col items-center justify-between overflow-hidden rounded-[10px] border-[0.5px] border-color-border",
        className
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden max-h-[488px] flex-shrink-0",
          featured ? " max-h-[488px]" : "h-auto"
        )}
      >
        <Image
          src={roomReference.image || ""}
          width={640}
          height={488}
          className={cn(
            "h-full object-cover lg:group-hover:scale-110 transition-all duration-300 ease-in-out"
          )}
          alt={roomReference.imageAlt || "room image"}
        />
      </div>

      <div
        className={cn(
          "flex h-full w-full flex-col px-8 py-8 justify-center",
          featured ? "px-4 sm:px-6 md:px-12 py-6" : "px-6 py-6"
        )}
      >
        <div className="flex flex-col">
          <SectionTitle
            className={cn(
              featured
                ? "text-[40px] leading-[48px]"
                : "text-[22px] leading-[32px]"
            )}
          >
            {roomReference.title}
          </SectionTitle>

          <div className={cn("mt-2 text-[15px]")}>
            <PortableText value={roomReference.description} />
          </div>
        </div>

        <div
          className={cn(
            " items-center gap-4 mt-6",
            featured ? "flex" : "grid grid-cols-2"
          )}
        >
          <Button>${roomReference.price}/Night</Button>
          <Button className="flex items-center gap-1" variant="outline">
            {roomReference.buttonLabel || "View room"}{" "}
            <span>
              <LiaAngleRightSolid />
            </span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardRoom
