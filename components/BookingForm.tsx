// import { Button } from "@mui/base"
// import { FormControl, Select InputLabel, Input, MenuItem, TextField } from "@mui/material"
// import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
// import InputLabel from "@mui/material/InputLabel"
// import MenuItem from "@mui/material/MenuItem"
// import FormControl from "@mui/material/FormControl"
// import Select from "@mui/material/Select"
import { TextField, Button, MenuItem, FormControl, Select } from "@mui/material"

type Props = {
  handleChange?: () => void
  age?: number | string
}

const BookingForm = ({ handleChange, age }: Props) => {
  return (
    <div
      className={`flex justify-between items-end flex-row gap-[25.5px] min-w-[1292px] box-border`}
    >
      {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div
        className={`grow shrink-0 basis-[297px] box-border h-[81px] max-w-[297px] flex-row items-center [justify-content:start] border-[none]`}
      >
        <label
          className={` text-base font-normal text-[black] block mb-[7.5px]`}
        >
          Check in
        </label>
        <TextField hiddenLabel id="checkIn" fullWidth />
        {/* <Input
          slotProps={{
            input: {
              className:
                "bg-[white] h-[49px] w-full box-border  text-xs font-normal text-[#676767] flex flex-row items-center [justify-content:start] pl-[13.5px] rounded-[5px] border-[0.5px] border-[#676767] border-solid",
              placeholder: "dd//mm//yyy",
              type: "text",
            },
          }}
        /> */}
      </div>

      {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div
        className={`grow shrink-0 basis-[297px] box-border h-[81px] max-w-[297px] flex-row items-center [justify-content:start] border-[none]`}
      >
        <label
          className={` text-base font-normal text-[black] block mb-[7.5px]`}
        >
          Check out
        </label>
        <TextField hiddenLabel id="checkOut" fullWidth />
        {/* <Input
          slotProps={{
            input: {
              className:
                "bg-[white] h-[49px] w-full box-border  text-xs font-normal text-[#676767] flex flex-row items-center [justify-content:start] pl-[13px] rounded-[5px] border-[0.5px] border-[#676767] border-solid",
              placeholder: "dd//mm//yyy",
              type: "text",
            },
          }}
        /> */}
      </div>

      {/* Select with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div
        className={`grow shrink-0 basis-[297px] box-border h-[81px] w-[297px] flex-row items-center [justify-content:start] border-[none]`}
      >
        <label
          className={` text-base font-normal text-[black] block mb-[7.5px]`}
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

      {/* Input with Label Component is detected here. We've generated code using HTML. See other options in "Component library" dropdown in Settings */}
      <div
        className={`grow shrink-0 basis-[149px] box-border h-[81px] max-w-[149px] flex-row items-center [justify-content:start] border-[none]`}
      >
        <label
          className={` text-base font-normal text-[black] block mb-[7.5px]`}
        >
          Guests
        </label>
        <TextField hiddenLabel id="numberOfGuests" fullWidth />
        {/* <Input
          slotProps={{
            input: {
              className:
                "bg-[white] h-[49px] w-full box-border  text-xs font-normal text-[#676767] flex flex-row items-center [justify-content:start] pl-[13.5px] rounded-[5px] border-[0.5px] border-[#676767] border-solid",
              placeholder: "1",
              type: "text",
            },
          }}
        /> */}
      </div>

      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="w-[150px] h-[50px] grow-0 shrink-0 basis-auto box-border border bg-[black]  text-base font-normal text-[white] cursor-pointer block rounded-[5px] border-[black] border-solid">
        Check Availability
      </Button>
    </div>
  )
}

export default BookingForm
