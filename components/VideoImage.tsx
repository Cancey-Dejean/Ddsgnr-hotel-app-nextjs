import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const VideoImage = ({
  imgSrc = "/images/lobby.jpg",
  imgAlt = "Video image",
  imgStyles = "",
}: {
  imgSrc?: string;
  imgStyles?: string;
  imgAlt?: string;
}) => {
  return (
    <div
      className={`relative flex-1 overflow-hidden rounded-[10px] ${imgStyles}`}
    >
      <Link
        href="#"
        className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="/images/play-button.png"
          alt="Play Button"
          className="h-[103px] w-[129px] object-contain"
          width={129}
          height={103}
        />
      </Link>

      <Image
        src={imgSrc}
        alt={imgAlt}
        className={imgStyles}
        width={616}
        height={640}
      />
    </div>
  );
};

export default VideoImage;
