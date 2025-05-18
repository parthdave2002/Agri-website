import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import { useTranslation } from "react-i18next";

interface Product {
  id: number;
  image: string;
  title: string;
  quantity: string;
  rating: number;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    image: '/images/thumb-tomatoes.png',
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 2,
    image: '/images/thumb-tomatoketchup.png',
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 3,
    image: '/images/thumb-bananas.png',
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 3,
    image: '/images/thumb-bananas.png',
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 3,
    image: '/images/thumb-bananas.png',
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 3,
    image: '/images/thumb-bananas.png',
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 3,
    image: '/images/thumb-bananas.png',
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  // Add more as needed
];

const BestSellingProductSection: React.FC = () => {
    const { t }  = useTranslation();

  return (
    <section className="py-10 overflow-hidden">
      <div className="max-w-1600 mx-auto px-4">
        <div className=" md:flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading md:text-3xl font-semibold">{t("Best selling products")}</h2>
          <div className="flex items-center gap-4  mt-[2rem] md:mt-0">
            <a href="#" className="text-blue-600 hover:underline text-sm font-medium self-center"> {t("View All")} → </a>
            <div className="flex gap-2">
              <button className=" products-carousel-prev  bg-blue-500 text-white px-2 py-2 rounded-full"> <FaChevronLeft /> </button>
              <button className=" products-carousel-next  bg-blue-500 text-white px-2 py-2 rounded-full"> <FaChevronRight /></button>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
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
              <div className="relative p-4 bg-white border border-[#FBFBFB] shadow-[0px_5px_22px_rgba(0,0,0,0.04)] rounded-2xl mb-7 hover:shadow-[0px_21px_44px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <button className="absolute top-5 right-5 w-[40px] h-[40px] rounded-full flex items-center justify-center bg-white border border-[#d8d8d8] hover:bg-red-500 hover:text-white transition-all duration-300"> <FaHeart />  </button>
                <button className="absolute top-5 left-5 w-[50px] h-[30px] rounded-md flex items-center justify-center bg-green-500 border border-[#d8d8d8] hover:bg-red-500 text-white transition-all duration-300"> <span className="badge bg-success position-absolute m-3">-15%</span>  </button>

                <figure className="bg-[#F9F9F9] rounded-[12px] text-center mb-4"> <img src={product.image} alt="Product" className="mx-auto max-h-[210px] h-auto" />  </figure>
                <h3 className="block w-full font-heading font-semibold text-[18px] leading-[25px] capitalize text-[#333333] mb-1"> {product.title} </h3>

                <div className="flex justify-between items-center text-sm mb-1">
                  <span className="font-normal text-[13px] leading-[18px] tracking-[0.02em] uppercase text-[#9D9D9D]">{product.quantity} </span>
                  <span className="font-semibold text-[13px] leading-[18px] capitalize text-[#222222] flex items-center gap-1"> <span className="text-[#FFC43F]">★</span> {product.rating} </span>
                </div>

                <div className="block w-full font-semibold text-[22px] leading-[30px] capitalize text-[#222222] mb-3">{product.price} </div>

                {/* Quantity Counter & Add to Cart */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-[#E2E2E2] rounded w-[85px] overflow-hidden">
                    <button className="w-[26px] h-[26px] text-center bg-white border-r border-[#E2E2E2] text-[#222222]"> − </button>
                    <input id="quantity" type="text" defaultValue="1" className="w-[28px] text-center border-none m-0 p-0 focus:outline-none" />
                    <button className="w-[26px] h-[26px] text-center bg-white border-l border-[#E2E2E2] text-[#222222]"> + </button>
                  </div>

                  <a href="#" className="text-blue-600 hover:underline text-sm flex items-center gap-1"> Add to Cart 🛒  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellingProductSection;
