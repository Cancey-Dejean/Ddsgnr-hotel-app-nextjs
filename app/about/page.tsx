"use client"
import PageWrapper from "@/components/PageWrapper"
import Rooms from "@/components/Rooms"
import StartVacation from "@/components/StartVacation"
import { roomOptions, vacationButtons } from "@/constants"

export default function Home() {
  return (
    <PageWrapper>
      <StartVacation
        title="Embark on an unforgettable journey with extraordinary experiences."
        videoImg="/images/lobby.jpg"
        desc="Imagine a place where relaxation meets adventure, and every corner holds a new story. At Ddsgnr, we don't just offer a stay; we offer an experience. From the comfort of our uniquely designed rooms to the vibrant communal spaces, every aspect of your stay is curated to inspire and rejuvenate."
        btnData={vacationButtons}
      />
      <Rooms data={roomOptions} />
    </PageWrapper>
  )
}
