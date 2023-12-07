import { BsStarFill } from "react-icons/bs"
import VideoImage from "../../VideoImage"

const ReviewBlock = ({
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  reviewer = "First Last",
  imgSrc = "https://dummyimage.com/572x594.png/dddddd/ffffff",
  imgAlt = "Image",
  stars = 5,
}: {
  /**
   * Description goes here
   */
  imgSrc?: string
  /**
   * Description goes here
   */
  imgAlt?: string
  /**
   * Description goes here
   */
  desc?: string
  /**
   * Description goes here
   */
  reviewer?: string
  /**
   * Description goes here
   */
  stars?: number
}) => {
  return (
    <div className="flex flex-1 flex-col items-center gap-10 lg:flex-row lg:gap-20">
      <div className="flex-1">
        <VideoImage imgSrc={imgSrc} imgAlt={imgAlt} />
      </div>

      <div className="flex flex-1 flex-col gap-6 text-center lg:gap-8 lg:text-left">
        <div className="flex items-center justify-center gap-[4px] lg:justify-start">
          {Array(Math.min(Math.max(stars, 1), 5))
            .fill(0)
            .map((_, index) => (
              <BsStarFill key={index} />
            ))}
        </div>

        <div className="text-2xl font-bold">{desc}</div>

        <p className="font-medium">{reviewer}</p>
      </div>
    </div>
  )
}

export default ReviewBlock
