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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "../ui/input"
import { useState } from "react"
import { useRouter } from "next/navigation"
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
    .string({
      required_error: "Guests must be a number.",
    })
    .min(1, "At least 1 guest is required.")
    .max(8, "Maximum of 4 guests is allowed."),
})

const BookingForm = ({
  checkInLabel,
  checkOutLabel,
  guestsLabel,
  roomsLabel,
  buttonLabel,
}: {
  className?: string
  checkInLabel: string
  checkOutLabel: string
  guestsLabel: string
  roomsLabel: string
  buttonLabel: string
}) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const { push } = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      checkIn: new Date(),
      checkOut: new Date(),
      guests: "1",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsSubmitted(true)
    push("/")
  }

  return (
    <section className="flex flex-col justify-between gap-[26] py-6 sm:py-[55px]">
      <Wrapper className="mt-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex  flex-col md:flex-row gap-[26px] md:items-end"
          >
            {/* CHECK IN */}
            <FormField
              control={form.control}
              name="checkIn"
              render={({ field }) => (
                <FormItem className="flex flex-col grow">
                  <FormLabel>{checkInLabel}</FormLabel>
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
                  <FormLabel>{checkOutLabel}</FormLabel>
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
                  <FormLabel>{roomsLabel}</FormLabel>
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
                  <FormLabel>{guestsLabel}</FormLabel>
                  <FormControl>
                    <Input type="number" min={1} max={8} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">{buttonLabel}</Button>
          </form>
        </Form>

        {/* {isSubmitted && (
          <div className="text-green-800 mt-4">
            Redirecting to booking page...
          </div>
        )} */}
      </Wrapper>
    </section>
  )
}

export default BookingForm
