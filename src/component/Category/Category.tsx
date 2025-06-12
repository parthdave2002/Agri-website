import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from "react-i18next";

const categoryData = [
  { img: 'images/category/plant-protection.webp', title: 'Plant Protection' },
  { img: 'images/category/plant-nutrition.webp', title: 'Plant Nutrition' },
  { img: 'images/category/fertilizer.webp', title: 'Fertilizer' },
  { img: 'images/category/seed.webp', title: 'Seeds' },
  { img: 'images/category/hardware.webp', title: 'Hardware' },
  { img: 'images/category/animal-husbandry.webp', title: 'Animal Husbandry' },
];

const CategoryCarouselSection: React.FC = () => {
      const { t } = useTranslation();

  return (
    <section className="py-10 overflow-hidden">
      <div className=" max-w-1600 mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">{t("Category")}</h2>
        </div>

        {/* <div className='p-4 grid grid-cols-5'>
          {categoryData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center  bg-[#f0ffff] shadow-md hover:shadow-xl transition duration-300 rounded-full"           >
              <img src={item.img} alt={item.title} className="w-16 h-16 object-contain mb-2" />
              <h3 className="font-heading font-semibold text-[18px] leading-[25px] text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div> */}

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 max-w-1600">
          {categoryData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group ">
              <div className="bg-gray-100 flex items-center justify-center group-hover:shadow-md transition rounded-full p-1"><LazyLoadImage effect="blur" src={item.img} alt={item.title} className=" object-contain rounded-full border-2 border-green-600" />  </div>
              <div className='mt-2 text-md md:text-[1rem] font-heading font-semibold   text-gray-800'> {item.title} </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCarouselSection;
