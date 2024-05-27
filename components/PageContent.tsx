// import {
//   Hero,
//   Benefits,
//   Collaboration,
//   Services,
//   Pricing,
//   Roadmap,
// } from "../components";

import BookingForm from "./BookingForm"
import Hero from "./Hero"

export const PageContent = (section: any) => {
  switch (section._type) {
    case "hero":
      return <Hero key={section._key} {...section} />
    case "bookingForm":
      return <BookingForm key={section._key} {...section} />

    default:
      return (
        <div className="py-10 text-center">
          <h1>Add Section content to page in Sanity CMS</h1>
        </div>
      )
  }
}