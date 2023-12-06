import React from "react"
import VacationFeatures from "./VacationFeatures"
import Wrapper from "../Wrapper"
import VideoImage from "../VideoImage"
import { featuresData, perksButtons } from "./../../constants"
import { featuresDataFake, perksButtonsFake } from "../../constants/fakeData"
import ButtonLink from "../ButtonLink"
import SectionHeader from "../SectionHeader"
import SectionTitle from "../SectionTitle"

const VacationSection = ({
  featuresDataVacation = featuresDataFake,
  mainImg = "https://dummyimage.com/572x594.png/dddddd/ffffff",
  btnData = perksButtonsFake,
  showHeader = true,
}: {
  /**
   * Description goes here
   */
  featuresDataVacation: typeof featuresData
  /**
   * Description goes here
   */
  mainImg: string
  /**
   * Description goes here
   */
  btnData: typeof perksButtons
  /**
   * Description goes here
   */
  showHeader?: boolean
}) => {
  return (
    <section className="py-6 sm:py-28">
      <Wrapper className="flex max-w-[1300px] flex-col gap-12">
        {showHeader ? (
          <SectionHeader
            title={<SectionTitle tag="h1">Services</SectionTitle>}
            desc=""
          />
        ) : null}

        <div className="flex  flex-col items-center gap-6 xl:flex-row xl:gap-20">
          <VideoImage
            imgSrc={mainImg}
            imgStyles="mx-auto w-full max-w-[900px]"
            imgAlt="Queen size bed in a room"
          />

          <div className="flex-1">
            <div className="mx-auto flex max-w-[900px] flex-col items-start gap-6 sm:grid sm:grid-cols-2 xl:mx-0 xl:max-w-full">
              {featuresDataVacation.map((feature, index) => (
                <VacationFeatures
                  key={index}
                  title={feature.title}
                  desc={feature.desc}
                  icon={feature.icon}
                />
              ))}
            </div>

            <div className="mt-7 flex justify-start gap-5 sm:mt-12">
              {btnData.map((button, i) => (
                <ButtonLink
                  key={i}
                  label={button.label}
                  url={button.url}
                  variant={button.variant}
                  icon={button.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default VacationSection
