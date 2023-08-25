import { Button } from "@mui/material";
import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import VideoImage from "./VideoImage";

type Props = {};

const StartVacation = ({}: Props) => {
  return (
    <section className="py-28">
      <Wrapper className="flex items-center gap-20">
        <VideoImage />

        <div className="flex w-full max-w-[616px] flex-col gap-6">
          <SectionTitle tag="h2" className="w-full">
            Start Your Vacation In Dream Hostel
          </SectionTitle>

          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </Paragraph>

          <div className="flex gap-4">
            <ButtonLink variant="btn-primary" linkable>
              Book Now
            </ButtonLink>
            <ButtonLink variant="btn-border-dark" linkable>
              Learn More
            </ButtonLink>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default StartVacation;
