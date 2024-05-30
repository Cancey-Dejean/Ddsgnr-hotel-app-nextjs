"use client"
import PageWrapper from "@/components/PageWrapper"
import VacationSection from "@/components/Services"
import { featuresData, perksButtons } from "@/constants"

export default function Home() {
  return (
    <PageWrapper>
      <VacationSection
        mainImg="/images/videoImg2.jpg"
        featuresDataVacation={featuresData}
        btnData={perksButtons}
      />
    </PageWrapper>
  )
}
