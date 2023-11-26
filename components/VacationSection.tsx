import React from "react";
import VacationFeatures from "./VacationFeatures";
import Wrapper from "./Wrapper";
import VideoImage from "./VideoImage";
import ButtonLink from "./Button";
import Paragraph from "./Paragraph";
import { LiaSwimmerSolid } from "react-icons/lia";
import { TbMassage } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { MdOutlineFoodBank } from "react-icons/md";
import ButtonGroup from "./ButtonGroup";

const VacationSection = () => {
  return (
    <section className="py-6 sm:py-28">
      <Wrapper className="flex max-w-[1300px] flex-col items-center gap-6 xl:flex-row xl:gap-20">
        <VideoImage
          imgSrc="/images/videoImg2.jpg"
          imgStyles="mx-auto w-full max-w-[900px]"
        />

        <div className="flex-1">
          <div className="mx-auto flex max-w-[900px] flex-col items-start gap-6 sm:grid sm:grid-cols-2 xl:mx-0 xl:max-w-full">
            <VacationFeatures
              title="Private pool"
              desc={
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </Paragraph>
              }
              icon={<LiaSwimmerSolid />}
            />
            <VacationFeatures
              title="Spa & Massage"
              desc={
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </Paragraph>
              }
              icon={<TbMassage />}
            />
            <VacationFeatures
              title="Gym"
              desc={
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </Paragraph>
              }
              icon={<CgGym />}
            />
            <VacationFeatures
              title="Restaurant"
              desc={
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </Paragraph>
              }
              icon={<MdOutlineFoodBank />}
            />
          </div>

          <div className="mt-7 flex justify-start gap-5 sm:mt-12">
            <ButtonGroup
              buttons={[
                {
                  url: "#",
                  variant: "btn-border-dark",
                  label: "Book Now",
                  linkable: true,
                },
                {
                  url: "#",
                  variant: "btn-border-none",
                  label: "Learn More",
                  icon: true,
                  linkable: true,
                },
              ]}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default VacationSection;
