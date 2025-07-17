import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const PopularSearches = () => {
   const { t } = useTranslation();
   const navigate = useNavigate()
  const items = useMemo(() => [
    "popularSearch.farm_gold_humic",
    "popularSearch.tata_bahaar",
    "popularSearch.farm_grow_plus",
    "popularSearch.roket",
    "popularSearch.saaf",
    "popularSearch.areva",
    "popularSearch.em1",
    "popularSearch.tata_gateway",
    "popularSearch.goldzyme_crop_plus",
    "popularSearch.tata_tafgor",
    "popularSearch.upl_ulala",
    "popularSearch.tata_manik",
    "popularSearch.tata_solubor",
    "popularSearch.fertis_90_sulphar_mills",
    "popularSearch.lancer_gold",
    "popularSearch.gelops_bg_cotton",
    "popularSearch.spraywell_pump_12x12",
    "popularSearch.tadpatri_18x24",
    "popularSearch.osian_megha_torch",
    "popularSearch.amul_fighter_torch"
], []);

  const RedictCall = (data:any) =>{
    navigate(data)
  }

  return (
    <section className="py-5">
      <div className="max-w-1600 mx-auto px-4">
        <h2 className="md:text-[2rem] text-[1.8rem]  font-heading font-semibold my-5">{t("People are also looking for")}</h2>
        <div className="flex flex-wrap gap-2">
          {items.map((item :any, index:any) => (
            <button key={index} className="bg-yellow-50 me-2 mb-2 text-gray-500 hover:text-gray-50  px-4 py-2 rounded hover:bg-green-500 text-[0.8rem] md:text-[1.1rem]  transition" onClick={() => RedictCall("/product")}> {t(item)} </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
