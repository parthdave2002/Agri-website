import React, { useState } from "react";
import {  FaFacebookMessenger, FaInstagram, FaLinkedinIn,  FaYoutube } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {  IoLanguageOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useTranslation } from "react-i18next";
import CartSection from "../../pages/Cart/Cart";

const Header: React.FC= ( ) => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState("en");
    const [isOpenlanguage, setIsOpenlang] = useState(false);

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        setIsOpenlang(false);
    };

      const [cartOpen , setCartOpen] = useState(false);
      const onClose =() => setCartOpen(false)
      const CartCall = () =>  setCartOpen(true)

  return (
    <>
    <div className="w-full  bg-white mb-3">
        <div className="container border-b border-gray-100 mx-auto  py-1"> 
                <div className=" flex  justify-between">
                    <div className="text-gray-500"> {t('Missed Call To Order')} : 1800-253-15880  </div>
                    <div className="flex gap-x-3 self-center">
                            <div> <FaFacebookMessenger  className="text-gray-300 hover:text-blue-500 cursor-pointer" size={22}  /> </div>
                            <div> <FaInstagram className="text-gray-300 hover:text-red-500 cursor-pointer" size={22}  /> </div>
                            <div> <FaYoutube  className="text-gray-300 hover:text-red-500 cursor-pointer" size={22} /> </div>
                            <div> <FaLinkedinIn  className="text-gray-300 hover:text-blue-500 cursor-pointer" size={22} /> </div>
                    </div>
                </div>
        </div>

      <div className="container border-b border-gray-100 mx-auto  py-3">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="w-full sm:w-1/2 lg:w-1/4 text-center sm:text-left">  <a href="index.html">   <img src="/images/logo.png" alt="logo" className="h-10 mx-auto sm:mx-0" /> </a> </div>

            <div className="flex  flex-col md:flex-row gap-x-[5rem] justify-center">  
                    <div className="text-xl md:text-[1.2rem] hover:text-gray-500 hover: font-heading font-bold  cursor-pointer"> {t("Home")}</div>
                    <div className="text-xl md:text-[1.2rem] hover:text-gray-500 hover: font-heading font-bold  cursor-pointer"> {t("About")} </div>
                    <div className="text-xl md:text-[1.2rem] hover:text-gray-500 hover: font-heading font-bold  cursor-pointer"> {t("Products")} </div>
                    <div className="text-xl md:text-[1.2rem] hover:text-gray-500 hover: font-heading font-bold  cursor-pointer">{t("Contact Us")} </div>
            </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mt-4 sm:mt-0">
            <ul className="flex items-center justify-center gap-x-3">
                <div className="relative ">
                    <button  onClick={() => setIsOpenlang((prev) => !prev)}   className="flex items-center bg-gray-100 rounded-full px-4 py-2 space-x-2 hover:bg-gray-200 transition" >
                        <IoLanguageOutline className="text-gray-600 text-lg" />
                        <h3 className="text-md text-gray-800 ">{language}</h3>
                        <IoIosArrowDown   className="text-gray-500" size={18} />
                    </button>

                    {isOpenlanguage && (
                            <div className="absolute z-10 mt-2 w-40 bg-white shadow-lg rounded-md ">
                                    {["en", "gj"].map((lang) => (
                                        <h6  key={lang}   onClick={() => handleLanguageChange(lang)} className={`px-4 py-2  border-b border-gray-100 text-xl md:text-[1rem] font-heading font-bold  cursor-pointer  ${  language === lang ? "text-blue-600" : "text-gray-700" }`}>{lang}</h6>
                                    ))}
                            </div>
                    )}
                </div>
              <li className=" flex gap-x-3 rounded-full bg-gray-200 p-3 mx-1 cursor-pointer" onClick={() => CartCall()}>    <MdOutlineShoppingCart   size={20} />    </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

     <CartSection  cartOpen={cartOpen} onClose={onClose} />
    </>
  );
};

export default Header;