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
      name: 'Dhirubhai Solanki',
      position: 'Cotton',
      message:'I used AgriBharat’s seeds this season, and the results are amazing! The plants are healthy, the growth is strong, and I’m expecting a great harvest. Very satisfied with the quality.',
      image: '/public/images/farmer/Dhirubhai Solanki.jpeg',
      rating: 4,
    },
    {
      name: 'Hasmukhbhai Chudasama',
      position: 'Sesame',
      message:'I bought sesame seeds from AgriBharat, and I’m very happy with the results. The germination was excellent, and the crop is growing really well. I will definitely recommend it to other farmers.',
      image: '/public/images/farmer/Hasmukhbhai Chudasama.jpeg',
      rating: 5,
    },
    {
      name: 	"Ashvinbhai Vanja",
      position: 'Farmer',
      message : 'I ordered seeds and a tarpaulin sheet from AgriBharat. Everything was delivered on time and in perfect condition. I’m very satisfied with the quality. AgriBharat is truly supporting farmers like me.',
      image: '/public/images/farmer/Ashvinbhai vanja.jpeg',
       rating: 5,
    },
    {
      name: 'Arajanbhai Vala',
      position: 'Farmer',
      message:'The battery sprayer I bought from Agri Bharat is working great in my fields. It has made pesticide application so much easier. Their service is also very helpful and quick.',
      image: '/public/images/farmer/Arajan Vala.jpeg',
       rating: 5,
    },
    {
      name: 	"Chandrsinh Gohil",
      position: 'Farmer',
      message : 'I bought seeds from Agri Bharat. The packing, delivery, and seed quality are all top-class. Will definitely order again. Thanks to Agri Bharat for supporting farmers.',
      image: '/public/images/farmer/Chandrsinh Gohil.jpeg',
       rating: 4,
    },
    {
      name: 'Nareshbhai Goswami',
      position: 'Farmer',
      message:'I ordered a battery sprayer from Agri Bharat. It was delivered quickly and works perfectly. Very useful for spraying across my farm with less effort. Thank you, Agri Bharat!.',
      image: '/public/images/farmer/Nareshbhai goswami.jpeg',
       rating: 5,
    },
  ];

  return (
    <section className="pb-10">
      <div className="max-w-1600 mx-auto px-4">
        <h2 className="text-[2rem] font-heading font-semibold my-5"> {t("Testimonial")}</h2>

         <div className="max-w-7xl mx-auto px-4 py-12">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">Testimonials from Our Farmers</h2> */}

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            >
              {testimonials.map((t: any, index: number) => (
                <SwiperSlide key={index}>
                  <div className="bg-white h-full flex flex-col justify-between p-6 transition-transform duration-300 hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <LazyLoadImage
                        effect="blur"
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover border border-green-500"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                        <p className="text-sm text-gray-500">{t.position}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed mb-4 line-clamp-5">
                      <span className="text-2xl text-green-500 leading-none mr-1">“</span>
                      {t.message}
                    </p>

                    <div className="flex">
                      {[...Array(5)].map((_, i) =>
                        i < t.rating ? (
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