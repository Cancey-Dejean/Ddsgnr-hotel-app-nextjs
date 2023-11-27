import {
  TextField,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material"
import Wrapper from "../Wrapper"
import ButtonLink from "../Button"
import { ChangeEvent, useState } from "react"
import Input from "../Input/InputField"
import InputField from "../Input/InputField"
import SelectDropdown from "../Input/SelectDropdown"
import { roomsData } from "../../constants"

const BookingForm = () => {
  const [selectedRoom, setSelectedRoom] = useState("")

  const handleRoomSelection = (room: string) => {
    setSelectedRoom(room)
  }
  return (
    <section className="flex justify-between gap-[26] py-6 sm:py-[55px]">
      <Wrapper className=" max-w-[1209px]">
        <form
          action="#"
          className="flex flex-wrap items-start gap-[26px] lg:flex-nowrap"
        >
          <div className="flex w-full  justify-between flex-col md:w-[48%] lg:flex-1">
            {/* <InputField
              label="Check in"
              id="checkIn"
              type="date"
              placeholder="MM/DD/YYYY"
            /> */}
          </div>

          <div className="flex w-full  justify-between flex-col md:w-[48%] lg:flex-1">
            {/* <InputField
              label="Check out"
              id="checkOut"
              placeholder="MM/DD/YYYY"
              type="date"
            /> */}
          </div>

          <div className="flex w-full flex-col  justify-between md:w-[48%] lg:flex-1">
            <SelectDropdown label="Room" selectOptions={roomsData} />
          </div>

          <div className="flex w-full flex-col md:w-[48%] lg:flex-1">
            {/* <Input
              label="Guests"
              id="numberOfGuests"
              value={guest}
              placeholder="1"
              type="number"
              onChange={handleGuestChange}
              inputProps={{ min: 1 }}
            />
             */}
            {/* <InputField
              label="Guests"
              id="numberOfGuests"
              defaultValue="1"
              type="number"
              minLength={1}
            /> */}
          </div>

          <ButtonLink
            className="self-end px-[11px] py-[12px] h-[47px]"
            label="Check Availability"
          />
        </form>
        Room Value: {selectedRoom}
      </Wrapper>
    </section>
  )
}

export default BookingForm
