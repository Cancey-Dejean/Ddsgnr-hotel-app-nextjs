"use client"
import GallerySection from "@/components/GallerySection"
import PageWrapper from "@/components/PageWrapper"
import Reviews from "@/components/Reviews"

export default function Home() {
  return (
    <PageWrapper>
      <GallerySection />
      <Reviews />
    </PageWrapper>
  )
}
