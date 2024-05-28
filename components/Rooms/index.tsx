import Wrapper from "../Wrapper"
import CardRoom from "../CardRoom"
import SectionHeader from "../SectionHeader"
import SectionTitle from "../SectionTitle"
import { roomOptions } from "../../constants"
import { roomOptionsFake } from "../../constants/fakeData"

const Rooms = ({ data = roomOptionsFake }: { data?: typeof roomOptions }) => {
  return (
    <section className="py-10 sm:py-28">
      <Wrapper className="flex flex-col gap-6 xl:gap-20">
        <SectionHeader
          topTitle="Rooms"
          title={<SectionTitle tag="h2">Our Rooms</SectionTitle>}
          desc="Experience luxury with our plush bedding, modern amenities, and
          stunning views, ensuring an extraordinary stay for every guest."
        />

        <div className="mx-auto flex max-w-[900px] flex-col gap-6 xl:max-w-full xl:flex-row">
          {data.map((room, index) => (
            <CardRoom
              imgSrc="/images/card-image.jpg"
              title="Double deluxe"
              desc="Our double deluxe room offers cozy luxury, perfect for a restful stay."
              className=""
            />
          ))}
          {/* <CardRoom
            imgSrc="/images/card-image.jpg"
            title="Double deluxe"
            desc="Our double deluxe room offers cozy luxury, perfect for a restful stay."
            className=""
          /> */}

          {/* <div className="flex flex-col items-stretch gap-6 sm:grid sm:grid-cols-2 sm:gap-5">

          </div> */}
        </div>
      </Wrapper>
    </section>
  )
}

export default Rooms
