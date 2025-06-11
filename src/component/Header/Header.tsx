import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import {  FaFacebookF, FaFacebookMessenger, FaInstagram, FaLinkedinIn,  FaWhatsapp,  FaYoutube } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {  IoLanguageOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useTranslation } from "react-i18next";
import CartSection from "../../pages/Cart/Cart";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Header: React.FC= ( ) => {
    const nagivate = useNavigate()
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState("en");
    const [isOpenlanguage, setIsOpenlang] = useState(false);

    const handleLanguageChange = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        setIsOpenlang(false);
    };

    const labelMap: Record<string, string> = {
      en: "English",
      gj: "Gujarati",
    };

    const [cartOpen , setCartOpen] = useState(false);
    const onClose =() => setCartOpen(false)
    const CartCall = () =>  setCartOpen(true)

    const RedirectCall =(data:string) =>{
      nagivate(data)
    }

      const [isOpenSuccessModal, setIsOpenSuccessModal] = useState<boolean>(false);
      const OrderPlaced =() =>{
        setIsOpenSuccessModal(true)
        setCartOpen(false)
      }
    const [cartCount, setCartCount] = useState(3);

  return (
    <>
    <div className="w-full  bg-white mb-3">
        <div className="container border-b border-gray-100 mx-auto  py-1">
          <div className="md:flex justify-between">
            <div className="text-green-600 font-heading font-semibold text-md md:text-[1rem] text-center"> {t('Missed Call To Order')} : {t("9100029429 / 9100029329")}</div>
            <div className="flex gap-x-3 my-3 md:my-0 self-center justify-center">
              <a  target="_blank" rel='noopener noreferre'  href="https://chat.whatsapp.com/EpxTJUNTU8Q1NKUAS3RjBM"> <FaWhatsapp  className="text-gray-300 hover:text-green-500 cursor-pointer" size={22} /> </a>
              <a  target="_blank" rel='noopener noreferre'  href="https://www.instagram.com/agribharat.in?igsh=MXQwbnlwMmI5c3RvMw=="> <FaInstagram className="text-gray-300 hover:text-green-500 cursor-pointer" size={22} /> </a>
              <a  target="_blank" rel='noopener noreferre'  href="https://youtube.com/@agribharat2023?si=ip4lwikEkp4SCBgy"> <FaYoutube className="text-gray-300 hover:text-green-500 cursor-pointer" size={22} /> </a>
              <a  target="_blank" rel='noopener noreferre'  href="https://www.facebook.com/agribharat.in/"> <FaFacebookF  className="text-gray-300 hover:text-green-500 cursor-pointer" size={22} /> </a>
            </div>
          </div>
        </div>

      <div className="container border-b border-gray-100 mx-auto  py-3">
        <div className="md:flex flex-wrap items-center justify-between gap-4">
          <div className="text-center sm:text-left">  <div className="cursor-pointer"  onClick={ () =>RedirectCall("/")}>   <LazyLoadImage effect="blur" src="/images/logo.webp" alt="logo" className="h-[3.5rem] mx-auto sm:mx-0" /> </div> </div>

            <div className="flex flex-row gap-x-[5rem] justify-center my-6 md:my-0">
              <div className="text-xl md:text-[1.2rem] hover:text-green-600 hover: font-heading font-bold  cursor-pointer" onClick={() => RedirectCall("/")}> {t("Home")}</div>
              <div className="text-xl md:text-[1.2rem] hover:text-green-600 hover: font-heading font-bold  cursor-pointer" onClick={() => RedirectCall("/product")}> {t("Products")} </div>
            </div>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mt-4 sm:mt-0">
            <ul className="flex items-center justify-center gap-x-3">
                <div className="relative">
                    <button  onClick={() => setIsOpenlang((prev) => !prev)}   className="flex items-center bg-green-600 rounded-full px-4 py-2 space-x-2 hover:bg-green-500 transition" >
                        <IoLanguageOutline className="text-gray-50 text-lg" />
                          <h3 className="text-md text-gray-50 ">  {labelMap[language]}</h3>
                        <IoIosArrowDown   className="text-gray-50" size={18} />
                    </button>

                  {isOpenlanguage && (
                    <div className="absolute z-10 mt-2 w-40 bg-white shadow-lg rounded-md">
                      {["en", "gj"].map((lang) => {
                        return (
                          <h6  key={lang} onClick={() => handleLanguageChange(lang)} className={`px-4 py-2 border-b border-gray-100 text-xl md:text-[1rem] font-heading font-bold cursor-pointer ${language === lang ? "text-blue-600" : "text-gray-700" }`} > {labelMap[lang]} </h6>
                        );
                      })}
                    </div>
                  )}

                </div>
                <li  className="relative flex gap-x-3 rounded-full bg-green-600 hover:bg-green-500 p-2.5 mx-1 cursor-pointer text-gray-50"  onClick={() => CartCall()}> 
                  <MdOutlineShoppingCart size={24} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"> {cartCount}</span>
                </li>

              {/* <li className=" flex gap-x-3 rounded-full bg-green-600 hover:bg-green-500 p-2.5 mx-1 cursor-pointer text-gray-50" onClick={() => CartCall()}>    <MdOutlineShoppingCart   size={24} />    </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>

     <CartSection  cartOpen={cartOpen} onClose={onClose} OrderPlaced={OrderPlaced} />

         {isOpenSuccessModal == true ?
             <Dialog open={isOpenSuccessModal} onClose={setIsOpenSuccessModal} className="relative z-10">
                  <DialogBackdrop   transition  className="fixed inset-0 bg-gray-800/90 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"  />
            
                  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <DialogPanel transition  className="relative transform overflow-hidden rounded-lg p-6 bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                         <LazyLoadImage effect="blur" src="/public/images/Congratualtion-2.gif" />
                          <button  type="button"  onClick={() => setIsOpenSuccessModal(false)}  className="inline-flex w-full justify-center rounded-md border border-green-600 px-[4rem] py-2 text-sm md:text-lg font-semibold hover:text-white shadow-xs hover:bg-green-600 sm:ml-3 sm:w-auto"  >   Okay </button>

                      </DialogPanel>
                    </div>
                  </div>
                </Dialog>
        : null}
    </>
  );
};

export default Header;