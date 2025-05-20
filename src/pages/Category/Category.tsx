import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

const categoryData = [
  { img: 'images/icon-vegetables-broccoli.png', title: 'Fruits & Veges' },
  { img: 'images/icon-bread-baguette.png', title: 'Breads & Sweets' },
  { img: 'images/icon-soft-drinks-bottle.png', title: 'Drinks' },
  { img: 'images/icon-wine-glass-bottle.png', title: 'Wines' },
  { img: 'images/icon-animal-products-drumsticks.png', title: 'Meat & Poultry' },
  { img: 'images/icon-bread-herb-flour.png', title: 'Flour & Spices' },
  { img: 'images/icon-vegetables-broccoli.png', title: 'Fruits & Veges' },
  { img: 'images/icon-vegetables-broccoli.png', title: 'Fruits & Veges' },
  { img: 'images/icon-vegetables-broccoli.png', title: 'Fruits & Veges' },
  { img: 'images/icon-vegetables-broccoli.png', title: 'Fruits & Veges' },
  { img: 'images/icon-vegetables-broccoli.png', title: 'Fruits & Veges' },
  { img: 'images/icon-vegetables-broccoli.png', title: 'Fruits & Veges' },
];

const CategoryCarouselSection: React.FC = () => {
      const { t } = useTranslation();

  return (
    <section className="py-10 overflow-hidden">
      <div className=" max-w-1600 mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">{t("Category")}</h2>
          <div className="flex items-center gap-4">
            {/* <a href="#" className="text-sm text-yellow-600 hover:underline">{t("View All")} →</a> */}

             {/* <div className="flex gap-2">
              <button className=" category-carousel-prev  bg-green-500 text-white px-2 py-2 rounded-full"> <FaChevronLeft /> </button>
              <button className=" category-carousel-next  bg-green-500 text-white px-2 py-2 rounded-full"> <FaChevronRight /></button>
            </div> */}
          </div>
        </div>
        
        <div className='p-4'>
            <Swiper
            
            modules={[Navigation]}
            navigation={{
                nextEl: '.category-carousel-next',
                prevEl: '.category-carousel-prev',
            }}
            spaceBetween={20}
            breakpoints={{
                320: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
            }}
            >
            {categoryData.map((item, idx) => (
                <SwiperSlide key={idx} className='min-w-[300px] my-4'>
                <div className="flex flex-col items-center text-center p-[2rem] bg-[#f0ffff] rounded-xl shadow-md hover:shadow-xl transition duration-300"           >
                    <img src={item.img} alt={item.title} className="w-16 h-16 object-contain mb-2" />
                    <h3 className="font-heading font-semibold text-[18px] leading-[25px] text-gray-800">{item.title}</h3>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarouselSection;
