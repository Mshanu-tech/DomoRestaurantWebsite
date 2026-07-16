import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import RatingStars from "../ui/RatingStars";
import { testimonials } from "../../data/menu";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-px mx-auto">
        <SectionTitle
          eyebrow="Guest Voices"
          title="What Our Guests Are Saying"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={28}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".testimonial-pagination" }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="!pb-4"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id} className="h-auto pb-4">
              <div className="h-full bg-surface rounded-2xl p-8 shadow-[0_4px_28px_rgba(17,24,39,0.06)] flex flex-col">
                <Quote size={28} className="text-gold/40 mb-4" />
                <p className="text-ink-soft/75 leading-relaxed italic mb-6 flex-1">"{t.quote}"</p>
                <RatingStars rating={t.rating} className="mb-4" />
                <div>
                  <p className="font-display text-lg text-ink">{t.name}</p>
                  <p className="text-xs text-ink-soft/50 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="testimonial-pagination flex justify-center gap-2 mt-8 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-ink/15 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-gold [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300" />
      </div>
    </section>
  );
}
