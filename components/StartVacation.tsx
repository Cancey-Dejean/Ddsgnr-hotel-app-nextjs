import Wrapper from "./Wrapper";
import ButtonLink from "./ButtonLink";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import VideoImage from "./VideoImage";
import ButtonGroup from "./ButtonGroup";

type Props = {};

const StartVacation = ({}: Props) => {
  return (
    <section className="py-6 sm:py-28">
      <Wrapper className="flex flex-col items-center gap-6 xl:flex-row xl:gap-20">
        <VideoImage />

        <div className="flex w-full max-w-[616px] flex-col gap-6">
          <SectionTitle tag="h2" className="w-full">
            Start Your Vacation In Dream Hostel
          </SectionTitle>

          <Paragraph className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Paragraph>

          <div className="flex gap-4">
            <ButtonGroup
              buttons={[
                {
                  url: "/",
                  variant: "btn-primary",
                  label: "Book Now",
                  linkable: true,
                },
                {
                  url: "/",
                  variant: "btn-border-dark",
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

export default StartVacation;
