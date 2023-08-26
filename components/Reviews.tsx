import React from "react";
import Wrapper from "./Wrapper";
import VideoImage from "./VideoImage";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewBlock from "./ReviewBlock";
import Image from "next/image";
import Paragraph from "./Paragraph";

const Reviews = () => {
  return (
    <section className="py-28">
      <Wrapper>
        <Swiper
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
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
          <SwiperSlide>
            <ReviewBlock
              desc={
                <Paragraph className="font-bold">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat."
                </Paragraph>
              }
              reviewer="Gordan Kelly"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ReviewBlock
              desc={
                <Paragraph className="font-bold">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat."
                </Paragraph>
              }
              reviewer="Gordan Kelly"
            />
          </SwiperSlide>

          <SwiperSlide>
            <ReviewBlock
              desc={
                <Paragraph className="font-bold">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat."
                </Paragraph>
              }
              reviewer="Gordan Kelly"
            />
          </SwiperSlide>
        </Swiper>

        <div className="mt-6 flex items-center justify-between">
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
  );
};

export default Reviews;
