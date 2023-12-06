import Image from "next/image"

const VideoImage = ({
  imgSrc = "https://dummyimage.com/572x594.png/dddddd/ffffff",
  imgAlt = "Video image",
  imgStyles = "",
}: {
  imgSrc: string
  imgStyles?: string
  imgAlt: string
}) => {
  return (
    <div
      className={`max-w-[600px] mx-auto relative flex-1 overflow-hidden rounded-[10px] ${imgStyles}`}
    >
      <button
        type="button"
        aria-label="Play Button"
        className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 h-full w-full flex items-center justify-center"
      >
        <Image
          src="/images/play-button.png"
          alt="Play Button"
          className="h-[103px] w-[129px] object-contain"
          width={129}
          height={103}
        />
      </button>

      <Image
        src={imgSrc}
        alt={imgAlt}
        className={`w-full ${imgStyles}`}
        width={616}
        height={640}
      />
    </div>
  )
}

export default VideoImage
