import Wrapper from "../Wrapper"
import CardRoom from "../CardRoom"
import SectionHeader from "../SectionHeader"
import SectionTitle from "../SectionTitle"
import Paragraph from "../Paragraph"

const Rooms = () => {
  return (
    <section className="py-6 sm:py-28">
      <Wrapper className="flex flex-col gap-6 xl:gap-20">
        <SectionHeader
          topTitle="Rooms"
          title={<SectionTitle tag="h2">Our Rooms</SectionTitle>}
          desc={
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph>
          }
        />

        <div className="mx-auto flex max-w-[900px] flex-col gap-6 xl:max-w-full xl:flex-row">
          <CardRoom
            imgSrc="/images/card-image.jpg"
            title={`Double exclusive 2 queen beds`}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            className="w-full xl:max-w-[50%]"
          />
          <div className="flex flex-col items-stretch gap-6 sm:grid sm:grid-cols-2 sm:gap-5">
            <CardRoom
              imgSrc="/images/card-image-2.jpg"
              title="Double deluxe"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              smallCard
            />
            <CardRoom
              imgSrc="/images/card-image-3.jpg"
              title="Superior king bed"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              smallCard
            />
            <CardRoom
              imgSrc="/images/card-image-4.jpg"
              title="Double deluxe king bed"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              smallCard
            />
            <CardRoom
              imgSrc="/images/card-image-5.jpg"
              title="Double queen beds"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              smallCard
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Rooms
