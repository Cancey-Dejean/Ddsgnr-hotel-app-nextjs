import Wrapper from "../Wrapper"
import Paragraph from "../Paragraph"
import SectionTitle from "../SectionTitle"
import VideoImage from "../VideoImage"
import ButtonGroup from "../ButtonLink/ButtonGroup"

const StartVacation = ({
  title = "Section Title",
  videoImg = "https://dummyimage.com/572x594.png/dddddd/ffffff",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttonGroup = [
    {
      url: "/",
      variant: "btn-primary",
      label: "Link",
      linkable: true,
    },
    {
      url: "/",
      variant: "btn-border-dark",
      label: "Link",
      linkable: true,
    },
  ],
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
  buttonGroup?: {
    url: string
    variant: string
    label: string
    icon?: boolean
    linkable?: boolean
  }[]
}) => {
  return (
    <section className="py-6 sm:py-28">
      <Wrapper className="flex flex-col items-center gap-6 xl:flex-row xl:gap-20">
        <VideoImage imgSrc={videoImg} imgAlt="Lobby with green plants" />

        <div className="flex w-full max-w-[616px] flex-col gap-6">
          <SectionTitle tag="h2" className="w-full">
            {title}
          </SectionTitle>

          <Paragraph className="text-lg">{desc}</Paragraph>

          <div className="flex gap-4">
            <ButtonGroup buttons={buttonGroup} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default StartVacation
