import Image from "next/image";
import ButtonLink from "./ButtonLink";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import { twMerge } from "tailwind-merge";

const CardRoom = ({
  imgSrc = "/images/card-image.jpg",
  title,
  smallCard,
  desc,
  className,
}: {
  imgSrc?: string;
  title?: string;
  smallCard?: boolean;
  desc?: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "border-color-border max-w-full flex flex-col items-center justify-start overflow-hidden rounded-[5px] border-[0.5px]",
        className,
      )}
    >
      <Image
        src={imgSrc}
        width={640}
        height={488}
        className={twMerge(
          "w-full object-cover ",
          smallCard ? "h-[171px]" : "h-[488px]",
        )}
        alt=""
      />

      <div className={twMerge(smallCard ? "px-6 py-6" : "px-12 py-8")}>
        <div className="flex flex-col">
          <SectionTitle
            className={twMerge(
              "text-[40px] leading-[48px]",
              smallCard ? "text-[22px] leading-[32px]" : "",
            )}
          >
            {title}
          </SectionTitle>

          <Paragraph
            className={twMerge(
              "w-full",
              smallCard ? "mt-2 text-[15px]" : "mt-6",
            )}
          >
            {desc}
          </Paragraph>
        </div>

        <div
          className={twMerge(
            "flex items-center gap-4",
            smallCard ? "mt-6" : "mt-8",
          )}
        >
          <ButtonLink
            variant="btn-border-dark"
            linkable
            className={twMerge(smallCard ? "!px-5 !py-2" : "")}
          >
            $60/night
          </ButtonLink>

          <ButtonLink
            variant="btn-border-none"
            linkable
            className={twMerge(smallCard ? "!px-5 !py-2" : "")}
            icon
          >
            View room
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default CardRoom;
