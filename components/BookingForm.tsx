import {
  TextField,
  MenuItem,
  FormControl,
  Select,
  // SelectChangeEvent,
  // InputLabel,
} from "@mui/material";
import Wrapper from "./Wrapper";
import ButtonLink from "./ButtonLink";
// import { useState } from "react";

const BookingForm = () => {
  // const [room, setRoom] = useState("");

  // const handleRoomChange = (event: SelectChangeEvent) => {
  //   setRoom(event.target.value);
  // };

  return (
    <section className="flex justify-between gap-[26] py-[55px]">
      <Wrapper className=" max-w-[1209px]">
        <form action="#" className="flex items-start gap-[26px]">
          <div className="flex-1">
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

          <div className="flex-1">
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
          <div className="flex-1">
            <label className="mb-[8px] block text-base" tabIndex={0}>
              Room
            </label>

            <FormControl fullWidth className="dropdown__select">
              <Select
                // onChange={handleRoomChange}
                displayEmpty
                value=""
                label="Room"
                placeholder="Select Room"
                renderValue={() => (
                  <span className="text-black/40">Executive</span>
                )}
              >
                <MenuItem value="Executive">Executive</MenuItem>
                <MenuItem value="Deluxe">Deluxe</MenuItem>
                <MenuItem value="Plus">Plus</MenuItem>
                <MenuItem value="Economy">Economy</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex-1">
            <label className="mb-[8px] block text-base" tabIndex={0}>
              Guests
            </label>
            <TextField
              hiddenLabel
              id="numberOfGuests"
              fullWidth
              placeholder="1"
              type="number"
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
