import { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import customerImg from '../../../assets/customer-top.png'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    
    <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center mb-25">
        {/* Top Image */}
        <div className="flex justify-center mb-6">
          <img
            src={customerImg}
            alt="Customer Illustration"
            className="w-44 md:w-56 object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2E2E]">
          What our customers are sayings
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-2xl mx-auto text-gray-500 text-sm md:text-base leading-7">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2,
            scale: 0.9,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id} className="!w-[360px]">
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;