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
import Input from "../Input"

const roomsData = ["Standard", "Deluxe", "Executive", "Suite"]

const BookingForm = () => {
  const [room, setRoom] = useState("Executive")
  const [guest, setGuest] = useState(1)

  const handleRoomChange = (event: SelectChangeEvent) => {
    setRoom(event.target.value)
  }

  const handleGuestChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newGuestValue = parseInt(event.target.value)
    setGuest(newGuestValue)
  }

  return (
    <section className="flex justify-between gap-[26] py-6 sm:py-[55px]">
      <Wrapper className=" max-w-[1209px]">
        <form
          action="#"
          className="flex flex-wrap items-start gap-[26px] lg:flex-nowrap"
        >
          <div className="flex w-full  justify-between flex-col md:w-[48%] lg:flex-1">
            <Input
              label="Check in"
              id="checkIn"
              placeholder="MM/DD/YYYY"
              type="date"
            />
          </div>

          <div className="flex w-full  justify-between flex-col md:w-[48%] lg:flex-1">
            <Input
              label="Check out"
              id="checkOut"
              placeholder="MM/DD/YYYY"
              type="date"
            />
          </div>

          <div className="flex w-full flex-col  justify-between md:w-[48%] lg:flex-1">
            <label className="mb-[8px] block text-base" tabIndex={0}>
              Room
            </label>

            <FormControl fullWidth className="dropdown__select">
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={room}
                onChange={handleRoomChange}
                displayEmpty
              >
                {roomsData.map((room) => (
                  <MenuItem key={room} value={room}>
                    {room}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="flex w-full flex-col md:w-[48%] lg:flex-1">
            <Input
              label="Guests"
              id="numberOfGuests"
              value={guest}
              placeholder="1"
              type="number"
              onChange={handleGuestChange}
              inputProps={{ min: 1 }}
            />
          </div>

          <ButtonLink
            className="self-end px-[11px] py-[12px] h-[47px]"
            label="Check Availability"
            type="submit"
          />
        </form>
      </Wrapper>
    </section>
  )
}

export default BookingForm
