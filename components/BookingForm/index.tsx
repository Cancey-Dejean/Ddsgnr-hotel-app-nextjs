"use client"
// import {
// Button,
// Form,
//   Label,
//   TextField,
//   Input,
//   NumberField,
//   Group,
// } from "react-aria-components"
import Wrapper from "../Wrapper"
import ButtonLink from "../ButtonLink"
import SelectDropdown from "../Input/SelectDropdown"
import { roomsData } from "../../constants"
import { useFormReset } from "../../utils"

// ZOD Form
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input"

const roomsOptions = ["Standard", "Deluxe", "Executive", "Suite"]

const FormSchema = z.object({
  checkIn: z.date({
    required_error: "A check-in date is required.",
  }),
  checkOut: z.date({
    required_error: "A check-out date is required.",
  }),
  room: z.string({
    required_error: "A room is required.",
  }),
  guests: z
    .number({
      required_error: "Guests must be a number.",
    })
    .min(1, "At least 1 guest is required.")
    .max(4, "Maximum of 4 guests is allowed."),
})

const BookingForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      checkIn: new Date(),
      checkOut: new Date(),
      // room: "Executive",
      guests: 1,
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  // const onSubmit = useFormReset()
  return (
    <section className="flex flex-col justify-between gap-[26] py-6 sm:py-[55px]">
      {/* <Wrapper className=" max-w-[1209px]">
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
      </Wrapper> */}

      <Wrapper className="mt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-[26px] items-end"
          >
            {/* CHECK IN */}
            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem className="flex flex-col grow">
                  <FormLabel>Check In</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          // date > new Date() || date < new Date("1900-01-01")
                          date < new Date() || date === new Date()
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* CHECK OUT */}
            <FormField
              control={form.control}
              name="checkOut"
              render={({ field }) => (
                <FormItem className="flex flex-col grow">
                  <FormLabel>Check Out</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Room */}
            <FormField
              control={form.control}
              name="room"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>Room</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Room" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      {roomsOptions.map((room) => (
                        <SelectItem key={room} value={room.toLowerCase()}>
                          {room}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Guests */}
            <FormField
              control={form.control}
              name="guests"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>Guests</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Check Availability</Button>
          </form>
        </Form>
      </Wrapper>
    </section>
  )
}

export default BookingForm
