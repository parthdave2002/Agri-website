import React from 'react'
import { FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  name: string;
  position: string;
  message: string;
  image: string;
}

const TestimonailSection = () => {
 const { t } = useTranslation();
  const testimonials: Testimonial[] = [
    {
      name: 'Julia Roberts',
      position: 'Product and Sales Manager',
      message:
        'During the purchase process, any questions or doubts were met with swift and thorough assistance, leaving no query unanswered. The designer\'s helpfulness and the commitment to providing quick support underscore the dedication to customer satisfaction.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Julia Roberts',
      position: 'Product and Sales Manager',
      message:
        'During the purchase process, any questions or doubts were met with swift and thorough assistance, leaving no query unanswered. The designer\'s helpfulness and the commitment to providing quick support underscore the dedication to customer satisfaction.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Julia Roberts',
      position: 'Product and Sales Manager',
      message:
        'During the purchase process, any questions or doubts were met with swift and thorough assistance, leaving no query unanswered. The designer\'s helpfulness and the commitment to providing quick support underscore the dedication to customer satisfaction.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Julia Roberts',
      position: 'Product and Sales Manager',
      message:
        'During the purchase process, any questions or doubts were met with swift and thorough assistance, leaving no query unanswered. The designer\'s helpfulness and the commitment to providing quick support underscore the dedication to customer satisfaction.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="pb-10">
      <div className="max-w-1600 mx-auto px-4">
        <h2 className="text-[2rem] font-heading font-semibold my-5"> {t("Testimonial")}</h2>
        <div className=" p-8 rounded-xl shadow-md max-w-5xl mx-auto border border-gray-200 py-10 overflow-hidden">
          {/* <h2 className="text-3xl font-bold mb-6">
            <span className="text-indigo-600">Our Client</span> loves Us because Our Quality Work.
          </h2> */}

          <Swiper modules={[Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: false }} loop spaceBetween={30} slidesPerView={1} >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <img src={testimonial.image} alt={testimonial.name} className="w-36 h-36 rounded-full object-cover border-4 border-gray-200" />
                    <FaQuoteRight className="absolute -top-3 -right-3 text-white bg-indigo-600 p-2 rounded-full text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                    <p className="text-gray-700 mt-3 max-w-2xl">{testimonial.message}</p>
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