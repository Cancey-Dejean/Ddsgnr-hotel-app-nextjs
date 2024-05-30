import VacationFeatures from "./VacationFeatures"
import Wrapper from "../Wrapper"
import VideoImage from "../VideoImage"
import { featuresData, perksButtons } from "../../constants"
import { featuresDataFake, perksButtonsFake } from "../../constants/fakeData"
import ButtonLink from "../ButtonLink"
import SectionHeader from "../SectionHeader"
import SectionTitle from "../SectionTitle"
import { PerkProps } from "@/types/Perk"
import { Button, ButtonProps } from "../ui/button"
import { Link } from "next-view-transitions"

const Services = ({
  title,
  perks,
  videoImage,
  videoImageAlt,
  ctaButtons,
}: {
  /**
   * Description goes here
   */
  title?: string
  /**
   * Description goes here
   */
  videoImage: string
  /**
  /**
   * Description goes here
   */
  videoImageAlt: string
  /**
   * Description goes here
   */
  perks: PerkProps[]
  /**
   * Description goes here
   */
  ctaButtons: ButtonProps[]
}) => {
  return (
    <section className="py-10 sm:py-28">
      <Wrapper className="flex max-w-[1300px] flex-col gap-12">
        <SectionHeader
          title={<SectionTitle tag="h2">{title}</SectionTitle>}
          desc=""
        />

        {/* <div className="flex  flex-col items-center gap-6 xl:flex-row xl:gap-20">
          <VideoImage
            youtubeVideoId="ScMzIvxBSi4"
            videoImage={videoImage}
            // imgStyles="mx-auto w-full max-w-[900px]"
            videoImageAlt={videoImageAlt}
          />

          <div className="flex-1">
            <div className="mx-auto flex max-w-[900px] flex-col items-start gap-6 sm:grid sm:grid-cols-2 xl:mx-0 xl:max-w-full">
              {perks.map(({ title, description, icon, _key }: PerkProps) => (
                <VacationFeatures
                  key={_key}
                  title={title}
                  desc={description}
                  icon={icon}
                />
              ))}
            </div>

            <div className="mt-7 flex justify-start gap-5 sm:mt-12">
              {ctaButtons.slice(0, 2).map(({ variant, label }) => (
                <Button key={label} asChild variant={variant}>
                  <Link href="/">{label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div> */}
      </Wrapper>
    </section>
  )
}

export default Services
