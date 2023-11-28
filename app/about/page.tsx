"use client"
import PageWrapper from "@/components/PageWrapper"
import Rooms from "@/components/Rooms"
import StartVacation from "@/components/StartVacation"

export default function Home() {
  return (
    <PageWrapper>
      <StartVacation
        title="Start Your Vacation In Dream Hostel"
        videoImg="/images/lobby.jpg"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis
        viverra ornare, eros dolor interdum nulla, ut commodo diam libero
        vitae erat."
      />
      <Rooms />
    </PageWrapper>
  )
}
