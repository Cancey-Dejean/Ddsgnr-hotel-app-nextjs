"use client"
import {
  Button,
  Form,
  Label,
  TextField,
  Input,
  NumberField,
  Group,
} from "react-aria-components"
import Wrapper from "../Wrapper"
import ButtonLink from "../ButtonLink"
import SelectDropdown from "../Input/SelectDropdown"
import { roomsData } from "../../constants"
import { useFormReset } from "../../utils"

const BookingForm = () => {
  const onSubmit = useFormReset()
  return (
    <section className="flex justify-between gap-[26] py-6 sm:py-[55px]">
      <Wrapper className=" max-w-[1209px]">
        <Form
          onSubmit={onSubmit}
          className="flex flex-wrap items-start gap-[26px] lg:flex-nowrap"
        >
          <div className="flex w-full  justify-between flex-col md:w-[48%] lg:flex-1">
            <TextField name="checkIn" isRequired>
              <Label className="input-label">Check in</Label>
              <Input
                id="checkIn"
                type="date"
                className="input-base"
                placeholder="MM/DD/YYYY"
                required
              />
            </TextField>
          </div>

          <div className="flex w-full  justify-between flex-col md:w-[48%] lg:flex-1">
            <TextField name="checkOut" isRequired>
              <Label className="input-label">Check out</Label>
              <Input
                id="checkOut"
                type="date"
                className="input-base"
                placeholder="MM/DD/YYYY"
              />
            </TextField>
          </div>

          <div className="flex w-full flex-col  justify-between md:w-[48%] lg:flex-1">
            <SelectDropdown
              id="select"
              name="select"
              label="Room"
              selectOptions={roomsData}
              placeholder="Select Room"
              required
            />
          </div>

          <div className="flex w-full flex-col md:w-[48%] lg:flex-1">
            <NumberField name="guests" isRequired minValue={1} defaultValue={1}>
              <Label className="input-label">Guests</Label>
              <Group>
                <Input
                  type="number"
                  className="input-base"
                  min={1}
                  id="guests"
                />
                <Button slot="increment" />
                <Button slot="decrement" />
              </Group>
            </NumberField>
          </div>

          <ButtonLink
            className="self-end px-[11px] py-[12px] h-[47px]"
            label="Check Availability"
            type="submit"
          />
        </Form>
      </Wrapper>
    </section>
  )
}

export default BookingForm
