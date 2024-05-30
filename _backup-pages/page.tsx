"use client"

import BookingForm from "@/components/BookingForm"
import GallerySection from "@/components/GallerySection"
import Hero from "@/components/Hero"
import PageWrapper from "@/components/PageWrapper"
import Reviews from "@/components/Reviews"
import Rooms from "@/components/Rooms"
import StartVacation from "@/components/StartVacation"
import VacationSection from "@/components/Services"
import {
  featuresData,
  heroButtons,
  perksButtons,
  reviewsData,
  roomOptions,
  vacationButtons,
} from "@/constants"

export default function Home() {
  return (
    <PageWrapper>
      <Hero
        title="Enjoy Luxury Hotel Experience"
        desc="Discover unparalleled luxury and comfort at Ddsgnr: Where every detail is crafted for excellence."
        bgImage="/images/hero.jpg"
        btnData={heroButtons}
      />
      <BookingForm />
      <StartVacation
        title="Embark on an unforgettable journey with extraordinary experiences."
        videoImg="/images/lobby.jpg"
        desc="Imagine a place where relaxation meets adventure, and every corner holds a new story. At Ddsgnr, we don't just offer a stay; we offer an experience. From the comfort of our uniquely designed rooms to the vibrant communal spaces, every aspect of your stay is curated to inspire and rejuvenate."
        btnData={vacationButtons}
      />

      <Rooms data={roomOptions} />

      <VacationSection
        mainImg="/images/videoImg2.jpg"
        featuresDataVacation={featuresData}
        btnData={perksButtons}
      />

      <GallerySection
        imageOne="/images/gallery1.jpg"
        imageTwo="/images/gallery2.jpg"
        imageThree="/images/gallery3.jpg"
        imageFour="/images/gallery4.jpg"
        btnLabel="View More"
      />
      <Reviews data={reviewsData} />
    </PageWrapper>
  )
}
