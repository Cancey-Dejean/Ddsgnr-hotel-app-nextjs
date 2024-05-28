import Wrapper from "../Wrapper"
import CardRoom from "../CardRoom"
import SectionHeader from "../SectionHeader"
import SectionTitle from "../SectionTitle"
import { roomOptions } from "../../constants"
import { roomOptionsFake } from "../../constants/fakeData"
import { RoomProps } from "@/types/RoomProps"
import Image from "next/image"
import { PortableText } from "next-sanity"
import { cn } from "@/lib/utils"

const Rooms = ({ rooms }: { rooms?: RoomProps[] }) => {
  return (
    <section className="py-10 sm:py-28">
      <Wrapper className="flex flex-col gap-6 xl:gap-20">
        <SectionHeader
          topTitle="Rooms"
          title={<SectionTitle tag="h2">Our Rooms</SectionTitle>}
          desc="Experience luxury with our plush bedding, modern amenities, and
          stunning views, ensuring an extraordinary stay for every guest."
        />

        {rooms && (
          <div className="mx-auto max-w-[900px] grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rooms.map((room, index) => (
              <CardRoom key={index} {...room} />
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
        )}
      </Wrapper>
    </section>
  )
}

export default Rooms
