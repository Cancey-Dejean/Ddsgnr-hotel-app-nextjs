"use client"
import PageWrapper from "@/components/PageWrapper"
import SectionHeader from "@/components/SectionHeader"
import SectionTitle from "@/components/SectionTitle"
import VacationSection from "@/components/VacationSection"
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
