import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  const RedictCall = (data: string) =>{
    navigate(data)
  }

  const { t } =useTranslation()
  const d = new Date();
  const year = d.getFullYear();

  return (
    <>

      <footer className="bg-white text-gray-800 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8">

            <div className="col-span-1">
              <img src="/images/logo.webp" alt="FoodMart Logo" className="w-36 md:w-[15rem] mb-6 justify-self-center" />

              <div className='text-md md:text-[1rem] font-heading font-semibold'> {t("Phone")} :  {t("9100029429 / 9100029329")}  </div>
              <div className='text-md md:text-[1rem] font-heading font-semibold mb-4'> {t("Email")} : agribharat.info@gmail.com</div>
                <div className="flex space-x-3 ">
                  <a  target="_blank" rel='noopener noreferre'  href="https://chat.whatsapp.com/EpxTJUNTU8Q1NKUAS3RjBM"  className="w-10 h-10 flex items-center justify-center transition cursor-pointer">  <img src="/public/images/whatsapp.png" />   </a>
                  <a  target="_blank" rel='noopener noreferre'  href="https://www.instagram.com/agribharat.in?igsh=MXQwbnlwMmI5c3RvMw=="  className="w-10 h-10 flex items-center justify-center transition cursor-pointer">  <img  src="/public/images/instagram.png" />   </a>
                  <a  target="_blank" rel='noopener noreferre'  href="https://youtube.com/@agribharat2023?si=ip4lwikEkp4SCBgy"  className="w-10 h-10 flex items-center justify-center transition cursor-pointer">  <img  src="/public/images/youtube.png" />   </a>
                  <a  target="_blank" rel='noopener noreferre'  href="https://www.facebook.com/agribharat.in/"  className="w-10 h-10 flex items-center justify-center transition cursor-pointer"> <img  src="/public/images/facebook.png" />   </a>
                </div>
          </div>

          <div>
            <h4 className="text-xl md:text-[1.2rem] text-center font-heading font-semibold font-semibold mb-4">{t("Quick Links")}</h4>
            <ul className="space-y-2 text-sm text-center">
              <li><div onClick={() => RedictCall("/")} className="cursor-pointer hover:underline">{t("Home")}</div></li>
              <li><div onClick={() => RedictCall("/about")} className="cursor-pointer hover:underline">{t("About")}</div></li>
              <li><div onClick={() => RedictCall("/contactus")} className="cursor-pointer hover:underline">{t("Contact Us")}</div></li>
              <li><div onClick={() => RedictCall("/")} className="cursor-pointer hover:underline">FAQ</div></li>
            </ul>
          </div>

                 <div>
              <h4 className="text-xl md:text-[1.2rem] text-center font-heading font-semibold font-semibold mb-5">{t("Office Address")}</h4>
              <div className="flex flex-col gap-6">

                <div className="text-sm md:text-base font-semibold leading-relaxed">
                  <div className="flex flex-wrap gap-2 items-start">
                    <h5 className="text-lg md:text-[1rem] font-heading font-semibold">Address 1 :</h5>
                    <div>
                      <p className="mb-0 md:text-[0.9rem] font-heading">PUMA Headquarters, PUMA SE</p>
                      <p className="mb-0 md:text-[0.9rem] font-heading">Ahmedabad - 382415, Gujarat, India</p>
                    </div>
                  </div>
                </div>

 
                <div className="text-sm md:text-base font-semibold leading-relaxed">
                  <div className="flex flex-wrap gap-2 items-start">
                    <h5 className="text-lg md:text-[1rem] font-heading font-semibold">Address 2 :</h5>
                    <div>
                      <p className="mb-0 md:text-[0.9rem] font-heading">PUMA Headquarters, PUMA SE</p>
                      <p className="mb-0 md:text-[0.9rem] font-heading">Ahmedabad - 382415, Gujarat, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        </div>
      </div>
    </footer>

     <footer id="footer-bottom" className="bg-white py-4 border-t">
      <div className="max-w-[1600px] mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-600">
          <p className='text-md md:text-[1rem] text-gray-800 font-heading font-semibold'>© {year}. {t("All Rights Reserved")}.</p>
          <div className='flex flex-col md:flex-row  gap-4 mt-3 md:mt-0 '> 
            <div onClick={() => RedictCall("/terms & condition")} className="text-md md:text-[1rem] hover:text-gray-500 font-heading font-semibold cursor-pointer">{t("Terms & condition")} </div>
            <div onClick={() => RedictCall("/privacy-policy")} className="text-md md:text-[1rem] hover:text-gray-500 font-heading font-semibold cursor-pointer">{t("Privacy policy")}    </div>
            <div onClick={() => RedictCall("/refund-policy")} className="text-md md:text-[1rem] hover:text-gray-500 font-heading font-semibold cursor-pointer">{t("Returns & Refunds")} </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer