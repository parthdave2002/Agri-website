import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

const brandData = [
  { img: 'images/company/adamaLogo.webp', subtitle: 'Adama'},
  { img: 'images/company/ajeetLogo.webp', subtitle: 'Ajeet'},
  { img: 'images/company/akariLogo.webp', subtitle: 'Akari'},
  { img: 'images/company/ankurLogo.webp', subtitle: 'Ankur'},
  { img: 'images/company/basfLogo.webp', subtitle: 'BASF'},
  { img: 'images/company/bayerLogo.webp', subtitle: 'Bayer'},
  { img: 'images/company/crystalLogo.webp', subtitle: 'Crystal'},
  { img: 'images/company/dhanukaLogo.webp', subtitle: 'Dhanuka'},
  { img: 'images/company/dharapumpLogo.webp', subtitle: 'Dhara pump',},
  { img: 'images/company/dharmajLogo.webp', subtitle: 'Dharmaj'},
  { img: 'images/company/farmenterpriseLogo.webp', subtitle: 'Farm Enterprise'},
  { img: 'images/company/fmcLogo.webp', subtitle: 'FMC'},
  { img: 'images/company/gbtiLogo.webp', subtitle: 'GBTI'},
  { img: 'images/company/geolifeLogo.webp', subtitle: 'GEO Life'},
  { img: 'images/company/goldkingLogo.webp', subtitle: 'Gold King'},
  { img: 'images/company/hiteshLogo.webp', subtitle: 'Hitesh' },
  { img: 'images/company/indofilLogo.webp', subtitle: 'Indofil',},
  { img: 'images/company/janathaagroLogo.webp', subtitle: 'Janatha Agro'},
  { img: 'images/company/kaveriLogo.webp', subtitle: 'Kaveri'},
  { img: 'images/company/kayBeeBioLogo.webp', subtitle: 'KayBeeBio'},
  { img: 'images/company/mahadhanLogo.webp', subtitle: 'Mahadhan'},
  { img: 'images/company/namdhariSeedsLogo.webp', subtitle: 'Namdhari Seeds'},
  { img: 'images/company/nunhemsLogo.webp', subtitle: 'Nunhems'},
  { img: 'images/company/omagroLogo.webp', subtitle: 'Om Agro' },
  { img: 'images/company/osianLogo.webp', subtitle: 'Osian'},
  { img: 'images/company/otlawebLogo.webp', subtitle: 'Otlaweb' },
  { img: 'images/company/PiLogo.webp', subtitle: 'Pi', },
  { img: 'images/company/rainbiotechLogo.webp', subtitle: 'Rain Biotech' },
  { img: 'images/company/rallisLogo.webp', subtitle: 'Rallis'},
  { img: 'images/company/seminisLogo.webp', subtitle: 'Seminis'},
  { img: 'images/company/rallisLogo.webp', subtitle: 'Rallis'},
  { img: 'images/company/seminisLogo.webp', subtitle: 'Seminis'},
  { img: 'images/company/spraywellLogo.webp', subtitle: 'Spraywell'},
  { img: 'images/company/suketuorganicLogo.webp', subtitle: 'Suketu Organic'},
  { img: 'images/company/suketuseedsLogo.webp', subtitle: 'Suketu Seeds'},
  { img: 'images/company/sulphurmillsLogo.webp', subtitle: 'Sulphur Mills'},
  { img: 'images/company/sunsafeLogo.webp', subtitle: 'Sunsafe'},
  { img: 'images/company/syngentaLogo.webp', subtitle: 'Syngenta'},
  { img: 'images/company/tapasLogo.webp', subtitle: 'Tapas'},
  { img: 'images/company/terrapretaLogo.webp', subtitle: 'Terrapreta'},
  { img: 'images/company/uplLogo.webp', subtitle: 'UPL'},
  { img: 'images/company/yaraLogo.webp', subtitle: 'Yara'}
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
