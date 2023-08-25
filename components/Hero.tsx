import Wrapper from "./Wrapper";
import { twMerge } from "tailwind-merge";
import ButtonLink from "./ButtonLink";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import ButtonGroup from "./ButtonGroup";

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
          <SectionTitle className="w-full max-w-[467px]">
            Enjoy Luxury Hotel Experience
          </SectionTitle>

          <Paragraph className="w-full max-w-[549px] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Paragraph>

          <div className="flex items-center gap-4">
            <ButtonGroup
              buttons={[
                {
                  url: "/",
                  variant: "btn-inverted",
                  label: "Book Now",
                  linkable: true,
                },
                {
                  url: "/",
                  variant: "btn-border-light",
                  label: "Learn More",
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

export default Hero;
