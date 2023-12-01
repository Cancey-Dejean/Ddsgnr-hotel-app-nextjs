"use client"
import BookingForm from "@/components/BookingForm"
import GallerySection from "@/components/GallerySection"
import Hero from "@/components/Hero"
import PageWrapper from "@/components/PageWrapper"
import Reviews from "@/components/Reviews"
import Rooms from "@/components/Rooms"
import StartVacation from "@/components/StartVacation"
import VacationSection from "@/components/VacationSection"
import {
  featuresData,
  reviewsData,
  roomOptions,
  vacationButtons,
} from "@/constants"

export default function Home() {
  return (
    <PageWrapper>
      <Hero title="Enjoy Luxury Hotel Experience" bgImage="/images/hero.jpg" />
      <BookingForm />
      <StartVacation
        title="Start Your Vacation In Dream Hostel"
        videoImg="/images/lobby.jpg"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis
        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat."
        buttonGroup={vacationButtons}
      />

      <Rooms data={roomOptions} />

      <VacationSection
        mainImg="/images/videoImg2.jpg"
        featuresDataVacation={featuresData}
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
