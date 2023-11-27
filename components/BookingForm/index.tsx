// import {
//   TextField,
//   MenuItem,
//   FormControl,
//   Select,
//   SelectChangeEvent,
// } from "@mui/material"
"use client"
import Wrapper from "../Wrapper"
import ButtonLink from "../Button"
import { useState } from "react"
import InputField from "../Input"
import SelectDropdown from "../Input/SelectDropdown"
import { roomsData } from "../../constants"
import { Button, Form, Label, TextField, Input } from "react-aria-components"

const BookingForm = () => {
  let [submitted, setSubmitted] = useState(null)

  let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default browser page refresh.
    e.preventDefault()

    // Get form data as an object.
    let data = Object.fromEntries(new FormData(e.currentTarget))

    // Submit to your backend API...
    setSubmitted(data)
  }

  return (
    <section className="flex justify-between gap-[26] py-6 sm:py-[55px]">
      <Wrapper className=" max-w-[1209px]">
        <Form
          onSubmit={onSubmit}
          className="flex flex-wrap items-start gap-[26px] lg:flex-nowrap"
        >
          {/*<div className="flex w-full  justify-between flex-col md:w-[48%] lg:flex-1">
            <InputField
              label="Check in"
              id="checkIn"
              type="date"
              placeholder="MM/DD/YYYY"
            /> 
          </div>*/}

          {/* 
            <div className="flex w-full  justify-between flex-col md:w-[48%] lg:flex-1">
            <InputField
              label="Check out"
              id="checkOut"
              placeholder="MM/DD/YYYY"
              type="date"
            /> 
             </div>
            */}

          <div className="flex w-full flex-col  justify-between md:w-[48%] lg:flex-1">
            <SelectDropdown
              id="select"
              name="select"
              label="Room"
              selectOptions={roomsData}
            />
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

            <TextField name="name">
              <Input id="name" type="text" placeholder="Name" />
              {/* <InputField id="name" type="text" label="Name" name="name" /> */}
              {/* <InputField id="name" type="text" label="Name" name="name" /> */}
            </TextField>
          </div>

          <ButtonLink
            className="self-end px-[11px] py-[12px] h-[47px]"
            label="Check Availability"
            linkable={false}
            type="submit"
          />
          {/* </form> */}

          {submitted && (
            <div>
              You submitted: <code>{JSON.stringify(submitted)}</code>
            </div>
          )}
        </Form>
      </Wrapper>
    </section>
  )
}

export default BookingForm
