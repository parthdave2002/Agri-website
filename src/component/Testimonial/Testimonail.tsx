import React from 'react'
import { FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

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
      name: 'Julia Roberts',
      position: 'Farmer',
      message:'During the purchase process, any questions or doubts were met with swift and thorough assistance, leaving no query unanswered.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 4,
    },
    {
      name: 'Julia Roberts',
      position: 'Farmer',
      message:'During the purchase process, any questions or doubts were met with swift and thorough assistance, leaving no query unanswered.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      rating: 5,
    },
    {
      name: 'Julia Roberts',
      position: 'Farmer',
      message:'During the purchase process, any questions or doubts were met with swift and thorough assistance, leaving no query unanswered.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
       rating: 1,
    },
    {
      name: 'Julia Roberts',
      position: 'Farmer',
      message:'During the purchase process, any questions or doubts were met with swift and thorough assistance, leaving no query unanswered.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
       rating: 5,
    },
  ];

  return (
    <section className="pb-10">
      <div className="max-w-1600 mx-auto px-4">
        <h2 className="text-[2rem] font-heading font-semibold my-5"> {t("Testimonial")}</h2>
        <div className=" p-8 rounded-xl shadow-md max-w-5xl mx-auto border border-gray-200 py-10 overflow-hidden">
     
          <div className="relative max-w-5xl mx-auto px-1  md:px-4">
            <Swiper   modules={[Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: false }} loop spaceBetween={30} slidesPerView={1}  >
              {testimonials.map((t :any, index:number) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-lg shadow-lg  h-full flex flex-col items-center transition-all duration-500 hover:scale-105">
                    <FaQuoteLeft className="text-3xl text-green-500 mb-4" />
                    <img  src={t.image}   alt={t.name}  className="w-16 h-16 rounded-full object-cover mb-4" />
                    <p className="text-green-600 text-lg font-semibold mb-4">{t?.message}</p>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => i < t.rating ? (<FaStar key={i} className="text-green-500" />   ) : ( <FaRegStar key={i} className="text-green-300" /> )  )}
                    </div>
                    <h4 className="font-semibold font-heading">{t?.name}</h4>
                    <p className="text-lg text-gray-500">{t?.position}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonailSection