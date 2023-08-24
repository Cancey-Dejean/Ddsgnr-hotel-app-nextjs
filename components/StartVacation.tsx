import { Button } from "@mui/material";
import Image from "next/image";
import Wrapper from "./Wrapper";
import Link from "next/link";
import ButtonLink from "./ButtonLink";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";

type Props = {};

const StartVacation = ({}: Props) => {
  return (
    <section className="py-28">
      <Wrapper className="flex items-center gap-20">
        <div className="relative flex-1">
          <Link
            href="#"
            className="absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/images/play-button.png"
              alt="Play Button"
              className="h-[103px] w-[129px] object-contain"
              width={129}
              height={103}
            />
          </Link>

          <Image
            src="/images/lobby.jpg"
            alt="lobby"
            className="w-full"
            width={616}
            height={640}
          />
        </div>

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
            <ButtonLink variant="btn-primary">Book Now</ButtonLink>
            <ButtonLink variant="btn-border-dark">Learn More</ButtonLink>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default StartVacation;
