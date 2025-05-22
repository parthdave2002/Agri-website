import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

interface Product {
  id: number;
  image: string[];
  title: string;
  quantity: string;
  rating: number;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    image: ['/images/thumb-tomatoes.png', '/images/thumb-tomatoketchup.png','/images/thumb-bananas.png'],
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 2,
    image: ['/images/thumb-tomatoketchup.png', '/images/thumb-tomatoes.png', '/images/thumb-bananas.png'],
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 3,
    image: ['/images/thumb-bananas.png', '/images/thumb-tomatoketchup.png', '/images/thumb-tomatoes.png'],
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 4,
    image: ['/images/thumb-tomatoketchup.png', '/images/thumb-tomatoes.png', '/images/thumb-bananas.png'],
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 5,
    image:  ['/images/thumb-bananas.png'],
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 6,
    image: ['/images/thumb-tomatoketchup.png', '/images/thumb-tomatoketchup.png'],
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 7,
    image: ['/images/thumb-bananas.png'],
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  },
  {
    id: 8,
    image: ['/images/thumb-bananas.png', '/images/thumb-tomatoketchup.png', '/images/thumb-tomatoes.png'],
    title: 'Sunstar Fresh Melon Juice',
    quantity: '1 Unit',
    rating: 4.5,
    price: '$18.00',
  }
];

const PopularProductSection: React.FC = () => {

  const { t } =useTranslation()
  const navigate = useNavigate();

  const RedirectCall = (data: string) => {
    navigate(data)
  }
  return (
    <section className="py-10 overflow-hidden">
      <div className="max-w-1600 mx-auto px-4">
        <div className=" md:flex justify-between items-center mb-6">
          <h2 className="text-2xl font-heading md:text-3xl font-semibold">{t("Most popular products")}</h2>
          <div className="flex items-center gap-4  mt-[2rem] md:mt-0">
            <div onClick={() => RedirectCall("/product")} className="cursor-pointer text-green-600 hover:text-green-500 text-md font-medium self-center"> {t("View All")} </div>
          </div>
        </div>

        <div className="md:grid  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-1600">
          {products.map((product) => (
            <div key={product.id} className="relative p-4 bg-white border border-[#FBFBFB] shadow-[0px_5px_22px_rgba(0,0,0,0.04)] rounded-2xl mb-7 hover:shadow-[0px_21px_44px_rgba(0,0,0,0.08)] transition-shadow duration-300">
              <figure className="bg-[#F9F9F9] rounded-[12px] text-center mb-4">
                <Swiper modules={[Navigation, Autoplay]} spaceBetween={16} slidesPerView={1} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} >
                  {product.image.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={`Product image ${index + 1}`} className="mx-auto max-h-[210px] h-auto object-contain" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </figure>
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

                {/* <a href="#" className="text-blue-600 hover:underline text-sm flex items-center gap-1"> Add to Cart 🛒  </a> */}
                <button className="text-gray-50 px-4 py-2 text-md flex items-center gap-1 rounded-full flex items-center justify-center bg-green-600 border border-[#d8d8d8] hover:bg-green-500 hover:text-white transition-all duration-300"> Add to Cart <FaCartShopping />  </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default PopularProductSection;
