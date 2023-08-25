import React from "react";
import VacationFeatures from "./VacationFeatures";
import { Button } from "@mui/material";
import Wrapper from "./Wrapper";
import Image from "next/image";
import VideoImage from "./VideoImage";
import ButtonLink from "./ButtonLink";

type Props = {};

const VacationSection = (props: Props) => {
  return (
    <section
      className={` flex flex-row items-stretch justify-start bg-[white] px-16 py-28`}
    >
      <Wrapper className="flex items-center gap-20">
        <VideoImage imgSrc="/images/videoImg2.jpg" />

        <div className="flex-1">
          {/* Vacation Details */}
          <div className="grid grid-cols-2 gap-6">
            <VacationFeatures />
            <VacationFeatures />
            <VacationFeatures />
            <VacationFeatures />
          </div>

          <div className="flex items-center gap-4">
            <ButtonLink variant="btn-border-dark" linkable>
              Book Now
            </ButtonLink>

            <ButtonLink variant="btn-border-none" linkable icon>
              Learn More
            </ButtonLink>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default VacationSection;
