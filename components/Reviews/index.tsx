"use client"
import React, { useState } from "react"
import Image from "next/image"

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ReviewBlock from "./ReviewBlock"
import Wrapper from "../Wrapper"
import { reviewsFakeData } from "../../constants/fakeData"
import { reviewsData } from "../../constants"
import { ReviewsProps } from "@/types/ReviewsProps"

const Reviews = ({
  Reviews,
}: {
  /**
   * Description goes here
   */
  Reviews?: ReviewsProps
}) => {
  const [totalSlides, setTotalSlides] = useState(0)
  return (
    <section className="py-10 sm:py-28">
      <Wrapper>
        <Swiper
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          onInit={(swiper) => setTotalSlides(swiper.slides.length)}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
        >
          {Reviews.slice(0, 3).map((review, i) => (
            <SwiperSlide key={review._key}>
              <ReviewBlock {...review} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={`mt-6 flex items-center justify-between ${
            totalSlides < 2 ? "hidden" : ""
          }`}
        >
          <div className="custom-pagination"></div>

          <div className="flex items-center gap-[15px]">
            <button className="swiper-button-prev prev-btn relative">
              <Image
                src="/images/arrow-left.svg"
                width={40}
                height={40}
                alt="Arrow Previous"
              />
            </button>
            <button className="swiper-button-next next-btn relative">
              <Image
                src="/images/arrow-right.svg"
                width={40}
                height={40}
                alt="Arrow Previous"
              />
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default Reviews
