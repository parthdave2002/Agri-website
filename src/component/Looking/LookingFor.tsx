import React from 'react';
import { useTranslation } from 'react-i18next';

const PopularSearches = () => {
   const { t } = useTranslation();
  const items = [
    "Blue diamon almonds",
    "Angie’s Boomchickapop Corn",
    "Salty kettle Corn",
    "Chobani Greek Yogurt",
    "Sweet Vanilla Yogurt",
    "Foster Farms Takeout Crispy wings",
    "Warrior Blend Organic",
    "Chao Cheese Creamy",
    "Chicken meatballs",
    // Repeated for demonstration
    "Blue diamon almonds",
    "Angie’s Boomchickapop Corn",
    "Salty kettle Corn",
    "Chobani Greek Yogurt",
    "Sweet Vanilla Yogurt",
    "Foster Farms Takeout Crispy wings",
    "Warrior Blend Organic",
    "Chao Cheese Creamy",
    "Chicken meatballs",
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
