import Image from "next/image"
import Paragraph from "../Paragraph"
import SectionTitle from "../SectionTitle"
import { twMerge } from "tailwind-merge"
import ButtonLink from "../ButtonLink"

const CardRoom = ({
  imgSrc = "https://dummyimage.com/640x488.png/dddddd/ffffff",
  imgAlt = "card image",
  title = "Title",
  smallCard = false,
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  className = "",
}: {
  imgSrc?: string
  imgAlt?: string
  title?: string
  smallCard?: boolean
  desc?: string
  className?: string
}) => {
  return (
    <div
      className={twMerge(
        "group flex mx-auto  flex-col items-center justify-between overflow-hidden rounded-[10px] border-[0.5px] border-color-border",
        smallCard ? "lg:max-w-[400px]" : "lg:max-w-[900px]",
        className
      )}
    >
      <div className={twMerge("overflow-hidden w-full flex-1")}>
        <Image
          src={imgSrc}
          width={640}
          height={488}
          className={twMerge(
            "w-full h-full object-cover lg:group-hover:scale-110 transition-all duration-[.3s] ease-in-out"
          )}
          alt={imgAlt}
        />
      </div>

      <div
        className={twMerge(
          "flex w-full flex-col justify-center",
          smallCard ? "px-6 py-6" : "px-8 py-8 sm:px-12"
        )}
      >
        <div className="flex flex-col">
          <SectionTitle
            className={twMerge(
              smallCard
                ? "text-[22px] leading-[32px]"
                : "text-[40px] leading-[48px]"
            )}
          >
            {title}
          </SectionTitle>

          <Paragraph
            className={twMerge(
              "w-full",
              smallCard ? "mt-2 text-[15px]" : "mt-6"
            )}
          >
            {desc}
          </Paragraph>
        </div>

        <div
          className={twMerge(
            "flex items-center gap-4",
            smallCard ? "mt-6" : "mt-8"
          )}
        >
          <ButtonLink
            variant="btn-border-dark"
            className={twMerge(smallCard ? "!px-5 !py-2" : "")}
            label="$60/night"
          />

          <ButtonLink
            variant="btn-border-none"
            className={twMerge(smallCard ? "!px-5 !py-2" : "")}
            icon
            label="View room"
          />
        </div>
      </div>
    </div>
  )
}

export default CardRoom
