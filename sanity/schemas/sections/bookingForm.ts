import { defineType } from "sanity"
import { Rule } from "sanity"

export const bookingForm = defineType({
  name: "bookingForm",
  type: "object",
  title: "Booking Form",
  fields: [
    {
      name: "hideSection",
      title: "Hide Section",
      type: "hideSection",
    },
    {
      name: "checkInLabel",
      title: "Check-in Label",
      type: "string",
    },
    {
      name: "checkOutLabel",
      title: "Check Out Label",
      type: "string",
    },
    {
      name: "roomsLabel",
      title: "Rooms Label",
      type: "string",
    },
    {
      name: "guestsLabel",
      title: "Guests Label",
      type: "string",
    },
    {
      name: "buttonLabel",
      title: "Button Label",
      type: "string",
    },
  ],
  initialValue: {
    checkInLabel: "Check-in",
    checkOutLabel: "Check-out",
    guestsLabel: "Guests",
    roomsLabel: "Rooms",
    buttonLabel: "Check Availability",
  },
})
