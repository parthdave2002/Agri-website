import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay   } from 'swiper/modules';

const bannerSlides = [
  {
    category: '100% natural',
    title: 'Fresh Smoothie & Summer Juice',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.',
    button: 'Shop Now',
    img: 'images/product-thumb-1.png',
  },
  {
    category: '100% natural',
    title: 'Fresh Smoothie & Summer Juice',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.',
    button: 'Shop Collection',
    img: 'images/product-thumb-1.png',
  },
  {
    category: '100% natural',
    title: 'Heinz Tomato Ketchup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.',
    button: 'Shop Collection',
    img: 'images/product-thumb-2.png',
  },
];

const BannerSection: React.FC = () => {
  return (
     <section className="py-8 bg-[url('/images/background-pattern.jpg')] bg-no-repeat bg-cover ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Swiper   modules={[ Pagination, Scrollbar, A11y, Autoplay ]}  spaceBetween={50}   autoplay={{ delay: 5000, disableOnInteraction: false }}  scrollbar={{ draggable: true }} loop className="rounded-xl overflow-hidden" >
            {bannerSlides.map((item, idx) => (
                <SwiperSlide>
                    <div className="flex flex-col md:flex-row items-center bg-[#eaf5f7] rounded-xl p-6 md:p-10 ">
                        <div className="md:w-1/2 space-y-4">
                            <span className="text-yellow-600 text-lg font-semibold">{item?.category}</span>
                            <h2 className="text-3xl md:text-[3.5rem] leading-[4rem] font-heading font-bold text-gray-800">{item.title}</h2>
                            <p className="text-gray-600"> {item.description} </p>
                            <button className="mt-4 border border-gray-800 text-gray-800 px-6 py-2 uppercase text-sm rounded hover:bg-gray-800 hover:text-white transition"> Shop Now </button>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
                            <img src={item.img} alt="Smoothie Bottle" className="h-[30rem] object-contain" />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="space-y-6 h-full">

                  <div className="relative bg-[#e9f3e6] rounded-xl p-10 flex items-center justify-between overflow-hidden">

                      <div className="z-10 max-w-md">
                          <p className="text-[28px] font-light text-gray-900 mb-2">20% Off</p>

                          <div className="relative mb-4 pb-3 ">
                              <div className="border-b border-black w-20 absolute bottom-[6px] left-0" />
                              <div className="  uppercase text-[11px] tracking-[0.3em] text-[#252525] absolute bottom-0 right-8">  Sale </div>
                          </div>

                          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4"> Fruits & Vegetables </h3>

                          <a href="#" className="inline-flex items-center gap-1 text-gray-600 hover:text-black transition">
                              Shop Collection
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                              >
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                          </a>
                      </div>

                      <div className="absolute right-0 bottom-0 h-full">  <img src="/images/ad-image-1.png" alt="Fruits & Vegetables" className="h-full object-contain" /> </div>
                  </div>

                  <div className="relative bg-[#f4eee7] rounded-xl p-10 flex items-center justify-between overflow-hidden">
                      <div className="z-10">
                          <div className="text-[28px] font-light text-gray-900 mb-2">15% Off</div>
                          <div className="relative mb-4 pb-3 ">
                              <div className="border-b border-black w-20 absolute bottom-[6px] left-0" />
                              <div className="  uppercase text-[11px] tracking-[0.3em] text-[#252525] absolute bottom-0 right-8">  Sale </div>
                          </div>
                          <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">Baked Products</h3>
                          <a href="#" className="inline-flex items-center gap-1 text-gray-600 hover:text-black transition" >
                              Shop Collection
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={2}
                              >
                                  <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M9 5l7 7-7 7"
                                  />
                              </svg>
                          </a>
                      </div>

                      <div className="absolute right-0 bottom-0 h-full"> <img src="/images/ad-image-2.png" alt="Baked Products" className="h-full object-contain" /> </div>
                  </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
