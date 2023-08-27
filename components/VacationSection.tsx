import React from "react";
import VacationFeatures from "./VacationFeatures";
import Wrapper from "./Wrapper";
import VideoImage from "./VideoImage";
import ButtonLink from "./ButtonLink";
import Paragraph from "./Paragraph";
import { LiaSwimmerSolid } from "react-icons/lia";
import { TbMassage } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { MdOutlineFoodBank } from "react-icons/md";
import ButtonGroup from "./ButtonGroup";

const VacationSection = () => {
  return (
    <section className="py-6 sm:py-28">
      <Wrapper className="flex max-w-[1300px] items-center gap-20">
        <VideoImage imgSrc="/images/videoImg2.jpg" />

        <div className="flex flex-1 flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
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

          <div className="flex items-center gap-4">
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
