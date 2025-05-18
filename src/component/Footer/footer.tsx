import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { t } =useTranslation()
  const d = new Date();
  const year = d.getFullYear();

  return (
    <>

      <footer className="bg-white text-gray-800 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8">

          <div className="col-span-1">
              <img src="/images/logo.png" alt="FoodMart Logo" className="w-36 mb-6" />
            <div className="flex space-x-3">
              <div className="w-10 h-10 flex items-center justify-center transition cursor-pointer">  <img src="/public/images/whatsapp.png" />   </div>
              <div className="w-10 h-10 flex items-center justify-center transition cursor-pointer">  <img  src="/public/images/instagram.png" />   </div>
              <div className="w-10 h-10 flex items-center justify-center transition cursor-pointer">  <img  src="/public/images/youtube.png" />   </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4"> Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Terms & Condition</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Returns & Refunds</a></li>
              <li><a href="#" className="hover:underline">Cookie Guidelines</a></li>
              <li><a href="#" className="hover:underline">Delivery Information</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>

     <footer id="footer-bottom" className="bg-white py-4 border-t">
      <div className="max-w-[1600px] mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-600">
          <p>© {year}. {t("All Rights Reserved")}.</p>
          <p className="text-center md:text-right">  Design by  Demo user </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer