"use client"
import BookingForm from "@/components/BookingForm"
import GallerySection from "@/components/GallerySection"
import Hero from "@/components/Hero"
import Reviews from "@/components/Reviews"
import Rooms from "@/components/Rooms"
import StartVacation from "@/components/StartVacation"
import VacationSection from "@/components/VacationSection"

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <BookingForm />
      <StartVacation />
      <Rooms />
      <VacationSection />
      <GallerySection />
      <Reviews />
    </main>
  )
}
