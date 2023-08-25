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

type Props = {
  handleRoomChange?: () => void;
  room?: number | string;
};

const BookingForm = ({}: Props) => {
  const [room, setRoom] = useState("");

  const handleRoomChange = (event: SelectChangeEvent) => {
    setRoom(event.target.value);
  };

  return (
    <section className="flex justify-between gap-[26] py-[55px]">
      <Wrapper className="flex max-w-[1209px] items-start gap-[26px]">
        <form className="flex-1">
          <label className="mb-[8px] block text-base">Check in</label>
          <TextField
            hiddenLabel
            id="checkIn"
            fullWidth
            placeholder="MM/DD/YYYY"
          />
        </form>

        <div className="flex-1">
          <label className="mb-[8px] block text-base">Check out</label>
          <TextField
            hiddenLabel
            id="checkOut"
            fullWidth
            placeholder="MM/DD/YYYY"
          />
        </div>

        <div className="flex-1">
          <label className="mb-[8px] block text-base">Room</label>

          <FormControl fullWidth className="dropdown__select">
            <Select
              onChange={handleRoomChange}
              displayEmpty
              value={room}
              label="Room"
              placeholder="Select Room"
              renderValue={room !== "" ? undefined : () => <p>Answer</p>}
            >
              <MenuItem value="Executive">Executive</MenuItem>
              <MenuItem value="Deluxe">Deluxe</MenuItem>
              <MenuItem value="Plus">Plus</MenuItem>
              <MenuItem value="Economy">Economy</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex-1">
          <label className="mb-[8px] block text-base">Guests</label>
          <TextField
            hiddenLabel
            id="numberOfGuests"
            fullWidth
            placeholder="1"
            type="number"
          />
        </div>

        <ButtonLink className="self-end px-[11px] py-[12px]" type="submit">
          Check Availability
        </ButtonLink>
      </Wrapper>
    </section>
  );
};

export default BookingForm;
