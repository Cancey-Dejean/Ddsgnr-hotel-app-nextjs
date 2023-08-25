import Wrapper from "./Wrapper";
import Paragraph from "./Paragraph";
import SectionTitle from "./SectionTitle";
import CardRoom from "./CardRoom";

type Props = {};

const Rooms = (props: Props) => {
  return (
    <section className="py-28">
      <Wrapper>
        <div className="mb-20 flex flex-col items-center text-center">
          <Paragraph className="mb-4 font-semibold">Rooms</Paragraph>
          <SectionTitle tag="h2" className="mb-6 text-[48px] leading-[58px]">
            Our Rooms
          </SectionTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Paragraph>
        </div>

        <div className="flex gap-5">
          <CardRoom
            title="Double exclusive 2 queen beds"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            className="w-full max-w-[50%]"
          />
          <div className="grid grid-cols-2 gap-5">
            <CardRoom
              title="Double deluxe"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              smallCard
            />
            <CardRoom
              title="Double deluxe"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              smallCard
            />
            <CardRoom
              title="Double deluxe"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              smallCard
            />
            <CardRoom
              title="Double deluxe"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              smallCard
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Rooms;
