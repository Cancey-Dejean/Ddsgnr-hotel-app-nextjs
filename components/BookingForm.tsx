import {
  TextField,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import Wrapper from "./Wrapper";
import ButtonLink from "./ButtonLink";
import { useState } from "react";

const BookingForm = () => {
  const [room, setRoom] = useState("Executive");
  const [guest, setGuest] = useState(1);

  const handleRoomChange = (event: SelectChangeEvent) => {
    setRoom(event.target.value);
  };

  const handleGuestChange = (event) => {
    setGuest(event.target.value);
  };

  return (
    <section className="flex justify-between gap-[26] py-6 sm:py-[55px]">
      <Wrapper className=" max-w-[1209px]">
        <form
          action="#"
          className="flex flex-wrap items-start gap-[26px] lg:flex-nowrap"
        >
          <div className="flex w-full flex-col md:w-[48%] lg:flex-1">
            <label className="mb-[8px] block text-base" tabIndex={0}>
              Check in
            </label>
            <TextField
              hiddenLabel
              id="checkIn"
              fullWidth
              placeholder="MM/DD/YYYY"
              type="date"
              className="uppercase"
            />
          </div>

          <div className="flex w-full flex-col md:w-[48%] lg:flex-1">
            <label className="mb-[8px] block text-base" tabIndex={0}>
              Check out
            </label>
            <TextField
              hiddenLabel
              id="checkOut"
              fullWidth
              placeholder="MM/DD/YYYY"
              type="date"
              className="uppercase"
            />
          </div>
          <div className="flex w-full flex-col md:w-[48%] lg:flex-1">
            <label className="mb-[8px] block text-base" tabIndex={0}>
              Room
            </label>

            <FormControl fullWidth className="dropdown__select">
              {/* <InputLabel id="demo-customized-select-label">Age</InputLabel> */}
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={room}
                onChange={handleRoomChange}
                displayEmpty
              >
                <MenuItem value="Executive">Executive</MenuItem>
                <MenuItem value="Deluxe">Deluxe</MenuItem>
                <MenuItem value="Plus">Plus</MenuItem>
                <MenuItem value="Economy">Economy</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex w-full flex-col md:w-[48%] lg:flex-1">
            <label className="mb-[8px] block text-base" tabIndex={0}>
              Guests
            </label>
            <TextField
              hiddenLabel
              id="numberOfGuests"
              fullWidth
              value={guest}
              placeholder="1"
              type="number"
              onChange={handleGuestChange}
              inputProps={{ min: 1 }}
            />
          </div>
          <ButtonLink
            className="self-end px-[11px] py-[12px]"
            label="Check Availability"
            type="submit"
          />
        </form>
      </Wrapper>
    </section>
  );
};

export default BookingForm;
