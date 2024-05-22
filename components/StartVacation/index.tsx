import Wrapper from "../Wrapper"
import Paragraph from "../Paragraph"
import SectionTitle from "../SectionTitle"
import VideoImage from "../VideoImage"
import { vacationButtons } from "../../constants"
import { vacationButtonsFake } from "../../constants/fakeData"
import ButtonLink from "../ButtonLink"

const StartVacation = ({
  title = "Section Title",
  videoImg = "https://dummyimage.com/572x594.png/dddddd/ffffff",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  btnData = vacationButtonsFake,
}: {
  /**
   * Description goes here
   */
  videoImg: string
  /**
   * Description goes here
   */
  title: string
  /**
   * Description goes here
   */
  desc?: string
  /**
   * Description goes here
   */
  btnData: typeof vacationButtons
}) => {
  return (
    <section className="py-10 sm:py-28">
      <Wrapper className="flex flex-col items-center gap-6 xl:flex-row xl:gap-20">
        <VideoImage
          imgSrc={videoImg}
          youtubeVideoId="NpEaa2P7qZI"
          imgAlt="Lobby with green plants"
        />

        <div className="flex w-full max-w-[616px] flex-col gap-6">
          <SectionTitle tag="h2" className="w-full">
            {title}
          </SectionTitle>

          <Paragraph className="text-lg">{desc}</Paragraph>

          <div className="flex gap-4">
            {btnData.map((button, i) => (
              <ButtonLink
                key={i}
                label={button.label}
                url={button.url}
                variant={button.variant}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default StartVacation
