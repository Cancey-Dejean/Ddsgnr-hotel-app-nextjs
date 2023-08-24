import { Button } from "@mui/material";
import Wrapper from "./Wrapper";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ButtonLink from "./ButtonLink";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
  return (
    <section
      className={twMerge(
        "bg-hero relative flex min-h-[940px] items-center justify-center bg-cover bg-center bg-no-repeat text-[white]",
        "after:absolute after:z-0 after:h-full after:w-full after:bg-black/40 after:content-['']",
      )}
    >
      <Wrapper className="relative z-[1]">
        <div className="flex flex-col gap-6">
          <SectionTitle className="max-w-[467px]">
            Enjoy Luxury Hotel Experience
          </SectionTitle>

          <Paragraph className="max-w-[549px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Paragraph>

          <div className="flex items-center gap-4">
            <ButtonLink variant="btn-inverted">Book Now</ButtonLink>
            <ButtonLink variant="btn-border-light">Learn More</ButtonLink>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
