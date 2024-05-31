import Image from "next/image"
import ModalVideo from "../ModalVideo"

const VideoImage = ({
  videoImage,
  videoImageAlt,
  youtubeVideoId,
}: {
  videoImage?: string
  videoImageAlt?: string
  youtubeVideoId?: string
}) => {
  return (
    <div className={`max-w-[600px] mx-auto relative flex-1 overflow-hidden`}>
      <div className="absolute z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full flex items-center justify-center">
        <Image
          src="/images/play-button.png"
          alt="Play Button"
          className="h-[103px] w-[129px] object-contain"
          width={129}
          height={103}
        />
      </div>

      <Image
        src={videoImage}
        alt={videoImageAlt}
        className={`w-full rounded-[10px]`}
        width={616}
        height={640}
      />

      <ModalVideo youtubeVideoId={youtubeVideoId} />
    </div>
  )
}

export default VideoImage
