import { BsStarFill } from "react-icons/bs"
import VideoImage from "../../VideoImage"

const ReviewBlock = ({
  quote,
  reviewerName,
  videoImage = "https://dummyimage.com/572x594.png/dddddd/ffffff",
  videoImageAlt,
  stars = 5,
}: {
  /**
   * Description goes here
   */
  videoImage?: string
  /**
   * Description goes here
   */
  videoImageAlt?: string
  /**
   * Description goes here
   */
  quote?: string
  /**
   * Description goes here
   */
  reviewerName?: string
  /**
   * Description goes here
   */
  stars?: number
}) => {
  return (
    <div className="flex flex-1 flex-col items-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex-1">
        <VideoImage
          youtubeVideoId="NpEaa2P7qZI"
          videoImage={videoImage}
          videoImageAlt={videoImageAlt}
        />
      </div>

      <div className="flex flex-1 flex-col gap-6 text-center lg:gap-8 lg:text-left">
        <div className="flex items-center justify-center gap-[4px] lg:justify-start">
          {Array(Math.min(Math.max(stars, 1), 5))
            .fill(0)
            .map((_, index) => (
              <BsStarFill key={index} />
            ))}
        </div>

        <div className="text-2xl font-bold">{quote}</div>

        <p className="font-medium">{reviewerName}</p>
      </div>
    </div>
  )
}

export default ReviewBlock
