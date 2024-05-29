import Wrapper from "../Wrapper"
import CardRoom from "../CardRoom"
import SectionHeader from "../SectionHeader"
import SectionTitle from "../SectionTitle"
import { CardRoomProps } from "@/types/CardRoomProps"

const Rooms = ({ rooms }: { rooms?: CardRoomProps[] }) => {
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="col-start-1 col-span-1">
              {rooms.slice(0, 1).map((room, index) => (
                <CardRoom featured key={index} {...room} className="h-full" />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {rooms.slice(1, 6).map((room, index) => (
                <CardRoom key={index} {...room} />
              ))}
            </div>
          </div>
        )}
      </Wrapper>
    </section>
  )
}

export default Rooms
