import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

const brandData = [
    {
    img: 'images/company/adamaLogo.webp',
    subtitle: 'Adama',
  },
    {
    img: 'images/company/ajeetLogo.webp',
    subtitle: 'Ajeet',
  },
  {
    img: 'images/company/akariLogo.webp',
    subtitle: 'Akari',
  },
    {
    img: 'images/company/basfLogo.webp',
    subtitle: 'BASF',
  },
    {
    img: 'images/company/bayerLogo.webp',
    subtitle: 'Bayer',
  },
  {
    img: 'images/company/crystalLogo.webp',
    subtitle: 'Crystal',
  },
    {
    img: 'images/company/dhanukaLogo.webp',
    subtitle: 'Dhanuka',
  },
   {
    img: 'images/company/dharapumpLogo.webp',
    subtitle: 'Dhara pump',
  },
  {
    img: 'images/company/dharmaj.webp',
    subtitle: 'Dharmaj',
  },
  {
    img: 'images/company/farmenterpriseLogo.webp',
    subtitle: 'Farm Enterprise',
  },
  {
    img: 'images/company/fmcLogo.webp',
    subtitle: 'FMC',
  },
    {
    img: 'images/company/gbtiLogo.webp',
    subtitle: 'GBTI',
  },

  {
    img: 'images/company/geolifeLogo.webp',
    subtitle: 'GEO Life',
  },

  
   {
    img: 'images/company/syngentaLogo.webp',
    subtitle: 'Syngenta',
  },
  {
    img: 'images/company/uplLogo.webp',
    subtitle: 'UPL',
  },


  
];

const BrandCarouselSection: React.FC = () => {
  
  const repeatedData = [...brandData, ...brandData];
  const { t } = useTranslation();
  return (
    <section className="py-10 overflow-hidden">

      <div className="max-w-1600 mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">{t("Brands")}</h2>
          <div className="w-full overflow-hidden bg-white py-4">
            <Marquee loop={0} speed={50} pauseOnClick={true} autoFill={true}>
              {brandData.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-32 mx-10 flex items-center justify-center">
                  <div className='flex flex-col '>
                    <LazyLoadImage effect="blur" src={item.img}  className="max-h-full max-w-full object-contain" />
                    <h3 className="text-lg text-center font-heading font-bold text-gray-900 mt-2">{item.subtitle}</h3>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarouselSection;
