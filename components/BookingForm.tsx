import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import Wrapper from "./Wrapper";
import ButtonLink from "./ButtonLink";

type Props = {
  handleChange?: () => void;
  age?: number | string;
};

const BookingForm = ({ handleChange, age }: Props) => {
  return (
    <section className="flex justify-between gap-[26] py-[55px]">
      <Wrapper className="flex items-start gap-[26px]">
        {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
        <div className="flex-1">
          <label
            className={` mb-[7.5px] block text-base font-normal text-[black]`}
          >
            Check in
          </label>
          <TextField hiddenLabel id="checkIn" fullWidth />
        </div>

        <div className="flex-1">
          <label
            className={` mb-[7.5px] block text-base font-normal text-[black]`}
          >
            Check out
          </label>
          <TextField hiddenLabel id="checkOut" fullWidth />
        </div>

        <div className="flex-1">
          <label
            className={` mb-[7.5px] block text-base font-normal text-[black]`}
          >
            Room
          </label>

          <FormControl fullWidth>
            <Select value={age} onChange={handleChange} displayEmpty>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="flex-1">
          <label
            className={` mb-[7.5px] block text-base font-normal text-[black]`}
          >
            Guests
          </label>
          <TextField hiddenLabel id="numberOfGuests" fullWidth className="" />
        </div>

        <ButtonLink className="self-end px-[11px] py-[12px]">
          Check Availability
        </ButtonLink>
      </Wrapper>
    </section>
  );
};

export default BookingForm;
