import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQSection = () => {
   const { t } = useTranslation();
    const faqs = [
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy with full refunds on unused items in original packaging.'
  },
  {
    question: 'How long does shipping take?',
    answer: 'Shipping usually takes 3–5 business days depending on your location.'
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes, we offer 24/7 customer support via chat, email, and phone.'
  }
];

 const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className='py-5'>
        <div className='max-w-1600 mx-auto px-4'>
      <h2 className="text-[2rem] font-heading font-semibold my-5">{t("Frequently Asked Questions")}</h2>
        <div className="max-w-7xl mx-auto p-6">

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-300 pb-4">
          <button className="w-full flex justify-between items-center text-left text-lg font-semibold font-heading text-gray-800 focus:outline-none"  onClick={() => toggleFAQ(index)}  > <div className='text-xl md:text-2xl font-heading'>  {faq.question} </div> {openIndex === index ? <FaChevronUp /> : <FaChevronDown />} </button>
          {openIndex === index && ( <p className="mt-3 text-gray-600 font-heading transition-all duration-500 ease-in-out text-lg ">{faq.answer}</p> )}
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default FAQSection