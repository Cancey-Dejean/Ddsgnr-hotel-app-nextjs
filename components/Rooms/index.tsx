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
          <div className="mx-auto max-w-[900px] grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rooms.map((room, index) => (
              <CardRoom key={index} {...room} />
            ))}
          </div>
        )}
      </Wrapper>
    </section>
  )
}

export default Rooms
