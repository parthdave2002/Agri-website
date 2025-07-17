import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

const products: any[] = [
  {
    id: "6862a4563ca787accd907b7f",
    image: '/images/product/areva1.webp',
    title: 'Areva',
    quantity: '250 Gram',
    rating: 4.5,
    price: '500',
  },
  {
    id: "6872596422256079e7dce566",
    image: '/images/product/tataBahar1.webp',
    title: 'Tata Bahar',
    quantity: '250 ML',
    rating: 4.5,
    price: '500',
  },
  {
    id: "68736b7b2ac170b904090ff0",
    image: '/images/product/meghaTorch.jpg',
    title: 'Megha Torch',
    quantity: '1 Piece',
    rating: 4.5,
    price: '359',
  },
  {
    id: "68737b492ac170b904091386",
    image: '/images/product/suketuBajara.webp',
    title: 'Suketu 101 Bajara',
    quantity: '1 Unit',
    rating: 4.5,
    price: '18',
  }
  // Add more as needed
];

const BestSellingProductSection: React.FC = () => {
    const { t }  = useTranslation();
    const navigate = useNavigate()
    const RedirectCall = (data:string) => {
      navigate(data)
    }

  const DetailspageCall = (id: string | number) => {
    navigate(`/product-detail/${id}`)
  }

  return (
    <section className="py-10  overflow-hidden">
      <div className="max-w-1600 mx-auto px-4">
        <div className=" md:flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading md:text-3xl font-semibold">{t("Best selling products")}</h2>
          <div className="flex items-center gap-4  mt-[2rem] md:mt-0">
            <div onClick={() => RedirectCall("/product")} className="cursor-pointer text-green-600 hover:text-green-500 text-md font-medium self-center"> {t("View All")} </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          className='z-5'
          navigation={{
            nextEl: '.products-carousel-next',
            prevEl: '.products-carousel-prev',
          }}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative z-5 p-4 bg-white border border-[#FBFBFB] shadow-[0px_5px_22px_rgba(0,0,0,0.04)] rounded-2xl mb-7 hover:shadow-[0px_21px_44px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                  <figure className="bg-[#F9F9F9] rounded-[12px] text-center mb-4"> <LazyLoadImage effect="blur" src={product.image} alt="Product" className="mx-auto max-h-[210px] h-auto" />  </figure>

                    <div className="flex justify-between items-center text-sm ">
                      <h3 className="block w-full font-heading font-semibold text-[16px] leading-[25px] capitalize text-[#333333] mb-1 cursor-pointer truncate max-w-[11rem]" onClick={() => DetailspageCall(product?.id)}> {product?.title} </h3>
                      <span className="font-normal font-heading text-[1rem] leading-[18px] flex gap-x-1">
                        <div> {product?.quantity}  </div>
                        {/* <div>  {currentLang === 'gj' ? product?.packagingtype?.type_guj :  product?.packagingtype?.type_eng}   </div> */}
                      </span>
                    </div>
                {/* <div className="block w-full  font-heading font-semibold text-[16px] leading-[25px] capitalize text-[#222222] mb-1 cursor-pointer" onClick={() => DetailspageCall(product?.id)}>Rs. {product?.price} </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellingProductSection;
