import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const brandData = [
  {
    img: 'images/product-thumb-11.jpg',
    title: 'Honey best nectar you wish to get',
    subtitle: 'Amber Jar',
  },
  {
    img: 'images/product-thumb-12.jpg',
    title: 'Honey best nectar you wish to get',
    subtitle: 'Amber Jar',
  },
  {
    img: 'images/product-thumb-13.jpg',
    title: 'Honey best nectar you wish to get',
    subtitle: 'Amber Jar',
  },
  {
    img: 'images/product-thumb-14.jpg',
    title: 'Honey best nectar you wish to get',
    subtitle: 'Amber Jar',
  },
];

const BrandCarouselSection: React.FC = () => {
      const { t } = useTranslation();
  return (
    <section className="py-10 overflow-hidden">
      <div className="max-w-1600 mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">{t("Newly Arrived Brands")}</h2>
          <div className="flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-gray-700 hover:underline"> {t("View All")} → </a>
             <div className="flex gap-2">
              <button className=" brand-carousel-prev  bg-blue-500 text-white px-2 py-2 rounded-full"> <FaChevronLeft /> </button>
              <button className=" brand-carousel-next  bg-blue-500 text-white px-2 py-2 rounded-full"> <FaChevronRight /></button>
            </div>
          </div>
        </div>

        <Swiper 
       
          modules={[Navigation]}
          navigation={{
            nextEl: '.brand-carousel-next',
            prevEl: '.brand-carousel-prev',
          }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

            {brandData.map((item, index) => ( 
                <SwiperSlide key={index} >
                <div className="bg-white rounded-xl shadow p-4 mb-5">
                    <div className="flex ">
                    <div className="w-1/3">  <img src={item.img} alt={item.title} className="rounded-lg object-cover w-full h-full" /> </div>
                    <div className="w-2/3 pl-4">
                        <p className="text-sm text-gray-500 mb-1">{item.subtitle}</p>
                        <h5 className="text-base font-semibold">{item.title}</h5>
                    </div>
                    </div>
                </div>
                </SwiperSlide>
            ))}

        </Swiper>
      </div>
    </section>
  );
};

export default BrandCarouselSection;
