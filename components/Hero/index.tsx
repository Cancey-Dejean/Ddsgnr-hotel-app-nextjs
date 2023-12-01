import Wrapper from "../Wrapper"
import { twMerge } from "tailwind-merge"
import Paragraph from "../Paragraph"
import SectionTitle from "../SectionTitle"
import ButtonGroup from "../ButtonLink/ButtonGroup"
import ButtonLink from "../ButtonLink"
import { heroButtonsFake } from "../../constants/fakeData"
import { heroButtons } from "../../constants"

const Hero = ({
  title = "Title",
  desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  bgImage = "https://dummyimage.com/1440x960.png/dddddd/ffffff",
  btnData = heroButtonsFake,
}: {
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
  bgImage: string
  /**
   * Description goes here
   */
  btnData: typeof heroButtons
}) => {
  return (
    <section
      className={twMerge(
        "relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-[80px] text-[white] lg:h-[940px] w-full",
        "after:absolute after:z-0 after:h-full after:w-full after:bg-black/40 after:content-['']"
      )}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Wrapper className="relative z-[1]">
        <div className="flex flex-col gap-6 max-md:text-center">
          <SectionTitle className="w-full max-w-[467px] max-md:mx-auto max-sm:text-[40px] max-sm:leading-[48px]">
            {title}
            {/* Enjoy Luxury Hotel Experience */}
          </SectionTitle>

          <Paragraph className="w-full max-w-[549px] text-lg max-md:mx-auto">
            {desc}
          </Paragraph>

          <div className="flex items-center gap-4 max-md:justify-center">
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

export default Hero
