"use client"
import BookingForm from "@/components/BookingForm"
import GallerySection from "@/components/GallerySection"
import Hero from "@/components/Hero"
import PageWrapper from "@/components/PageWrapper"
import Reviews from "@/components/Reviews"
import Rooms from "@/components/Rooms"
import StartVacation from "@/components/StartVacation"
import VacationSection from "@/components/VacationSection"

export default function Home() {
  return (
    <PageWrapper>
      <Hero title="Enjoy Luxury Hotel Experience" />
      <BookingForm />
      <StartVacation />
      <Rooms />
      <VacationSection />
      <GallerySection />
      <Reviews />
    </PageWrapper>
  )
}
