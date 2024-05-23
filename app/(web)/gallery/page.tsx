"use client"
import GallerySection from "@/components/GallerySection"
import PageWrapper from "@/components/PageWrapper"
import Reviews from "@/components/Reviews"
import { reviewsData } from "@/constants"

export default function Home() {
  return (
    <PageWrapper>
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
