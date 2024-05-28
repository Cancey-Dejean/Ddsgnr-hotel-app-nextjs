import Wrapper from "../Wrapper"
import SectionTitle from "../SectionTitle"
import VideoImage from "../VideoImage"
import { Button, ButtonProps } from "../ui/button"
import { PortableText } from "next-sanity"
import { Link } from "next-view-transitions"

const StartVacation = ({
  title,
  videoImage,
  videoImageAlt,
  youtubeVideoId,
  description,
  ctaButtons,
}: {
  /**
   * Description goes here
   */
  videoImage: string
  /**
   * Description goes here
   */
  videoImageAlt: string
  /**
   * Description goes here
   */
  youtubeVideoId?: string
  /**
   * Description goes here
   */
  title: string
  /**
   * Description goes here
   */
  description?: any
  /**
   * Description goes here
   */
  ctaButtons: ButtonProps[]
}) => {
  return (
    <section className="py-10 sm:py-28">
      <Wrapper className="flex flex-col items-center gap-6 xl:flex-row xl:gap-20">
        <VideoImage
          videoImage={videoImage}
          youtubeVideoId={youtubeVideoId}
          videoImageAlt={videoImageAlt}
        />

        <div className="flex w-full max-w-[616px] flex-col gap-6">
          <SectionTitle tag="h2" className="w-full">
            {title}
          </SectionTitle>

          <div className="text-lg">
            <PortableText value={description} />
          </div>

          <div className="flex gap-4">
            {ctaButtons.slice(0, 2).map(({ variant, label }) => (
              <Button key={label} asChild variant={variant}>
                <Link href="/">{label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default StartVacation
