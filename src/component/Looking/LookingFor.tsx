import React from 'react';
import { useTranslation } from 'react-i18next';

const PopularSearches = () => {
   const { t } = useTranslation();
  const items = [
    "Farm gold humic",
    "Tata bahaar",
    "Farm grow+",
    "Roket",
    "Saaf",
    "Areva",
    "Em-1",
    "Tata gateway",
    "Goldzyme crop+",
    // Repeated for demonstration
    "Tata tafgor",
    "Upl ulala",
    "Tata manik",
    "Tata solubor",
    "Fertis 90% Sulphar mills",
    "Lancer gold",
    "Gelops Bg cotton",
    "12*12 spraywell pump",
    "18*24 Tadpatri",
    "Osian megha torch",
    "Amul fighter torch",
  ];

  return (
    <section className="py-5">
      <div className="max-w-1600 mx-auto px-4">
        <h2 className="text-[2rem] font-heading font-semibold my-5">{t("People are also looking for")}</h2>
        <div className="flex flex-wrap gap-2">
          {items.map((item :any, index:any) => (
            <button key={index} className="bg-yellow-50 me-2 mb-2 text-gray-500 hover:text-gray-50  px-4 py-2 rounded hover:bg-green-500 text-[0.8rem] md:text-[1.1rem]  transition"> {item} </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
