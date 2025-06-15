import React from 'react';
import { useTranslation } from 'react-i18next';

const DiscountBannerSection: React.FC = () => {
  const {t} = useTranslation();

const stats = [
  { label: 'discount.brands', value: '25+' },
  { label: 'discount.happy_farmers', value: '10K+' },
  { label: 'discount.products', value: '250+' },
  { label: 'discount.pincodes_delivery', value: '300+' },
];
  return (
    <section className="py-8">
      <div className="w-full">
        <div
          className="bg-[#e6f3fb] bg-no-repeat rounded-2xl py-12 px-4 md:px-12"
          style={{ backgroundImage: "url('/images/bg-leaves-img-pattern.png')" }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-center text-green-700 font-heading">
            {stats.map((stat:any, index:number) => (
              <div key={index}>
                <div className="text-4xl font-heading font-bold">{stat.value}</div>
                <div className="text-2xl font-heading">{t(stat.label)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBannerSection;
