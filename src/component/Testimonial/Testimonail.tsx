import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';
interface Testimonial {
  name: string;
  position: string;
  message: string;
  image: string;
  rating : number;
}

const TestimonailSection = () => {
 const { t } = useTranslation();
  const testimonials: Testimonial[] = [
    {
      name: 'testimonial1.name',
      position: 'Cotton',
      message:'testimonial1.message',
      image: '/public/images/farmer/Dhirubhai Solanki.jpeg',
      rating: 4,
    },
    {
      name: 'testimonial2.name',
      position: 'Sesame',
      message:'testimonial2.message',
      image: '/public/images/farmer/Hasmukhbhai Chudasama.jpeg',
      rating: 5,
    },
    {
      name: 	"testimonial3.name",
      position: 'Farmer',
      message : 'testimonial3.message',
      image: '/public/images/farmer/Ashvinbhai vanja.jpeg',
       rating: 5,
    },
    {
      name: 'testimonial4.name',
      position: 'Farmer',
      message:'testimonial4.message',
      image: '/public/images/farmer/Arajan Vala.jpeg',
       rating: 5,
    },
    {
      name: 	"testimonial5.name",
      position: 'Farmer',
      message : 'testimonial5.message',
      image: '/public/images/farmer/Chandrsinh Gohil.jpeg',
       rating: 4,
    },
    {
      name: 'testimonial6.name',
      position: 'Farmer',
      message:"testimonial6.message",
      image: '/public/images/farmer/Nareshbhai goswami.jpeg',
       rating: 5,
    },
  ];

  return (
    <section className="pb-10">
      <div className="max-w-1600 mx-auto px-4">
        <h2 className="text-[2rem] font-heading font-semibold my-5"> {t("Farmer Testimonial")}</h2>

         <div className="max-w-7xl mx-auto px-4 py-12">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            >
              {testimonials.map((testimonial: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="bg-white h-full flex flex-col justify-between p-6 transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <LazyLoadImage
                        effect="blur"
                        src={testimonial?.image}
                        alt={testimonial?.name}
                        className="w-14 h-14 rounded-full object-cover border border-green-500"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{t(testimonial?.name)}</h4>
                        <p className="text-sm text-gray-500">{testimonial?.position}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed mb-4 line-clamp-5">
                      <span className="text-2xl text-green-500 leading-none mr-1">“</span>
                       {t(testimonial?.message)}
                    </p>

                    <div className="flex">
                      {[...Array(5)].map((_, i) =>
                        i < testimonial.rating ? (
                          <FaStar key={i} className="text-green-500" />
                        ) : (
                          <FaRegStar key={i} className="text-gray-300" />
                        )
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </div>
    </section>
  )
}

export default TestimonailSection