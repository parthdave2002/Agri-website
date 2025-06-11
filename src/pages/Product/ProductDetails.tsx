import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';
import { toast } from "react-toastify";
import { GetProductViewlist  } from '../../Store/Product/action';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowRedoSharp } from 'react-icons/io5';
import { SiBattledotnet } from "react-icons/si";
import { FaWindowClose } from 'react-icons/fa';
import { Product, ProductDetails } from '../../types/types';
import { useTranslation } from 'react-i18next';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductDetailsSection = () => {
  const  { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])

  useEffect(() =>{
    if(id){
      dispatch(GetProductViewlist({id : id}))
    }
  },[id])

  //------------- Get data from redux code start -------------
  const productdetail: any = useSelector((state: any) => state?.Product.Productlist);

  const[productsData, setproductsData] = useState<ProductDetails>()
  useEffect(() => {

    if (productdetail?.success === true) {
      setproductsData(productdetail?.data);
    }
    else if (productdetail?.data?.success === false) {
      toast.error(productdetail?.msg);
    }
  }, [productdetail]);
  //------------- Get data from redux code end -------------

  const CloseCall = () =>{
    navigate(-1)
  }

  const products: Product[] = [
    {
      id: 1,
      image: ['/images/thumb-tomatoes.png', '/images/thumb-tomatoketchup.png', '/images/thumb-bananas.png'],
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
      image: ['/images/thumb-bananas.png'],
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

  return (
    <div>
      <div>
        <div className='flex justify-between px-4'>
          <div className="text-[2rem] font-semibold text-gray-900 font-heading"> Product Details   </div>
          <div className="text-[2rem] font-semibold text-gray-900 flex self-center cursor-pointer" onClick={() => CloseCall()} > <FaWindowClose /> </div>
        </div>

        <div className='flex px-3 mt-[2rem]'>
          <div className='flex-1'>
            <div className="relative w-full">
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {productsData?.product_pics && productsData?.product_pics.map((src: any, index: number) => (
                  <figure className="bg-[#F9F9F9] rounded-[12px] text-center mb-4">
                    <Swiper modules={[Navigation, Autoplay]} spaceBetween={16} slidesPerView={1} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} >
                      {productsData.product_pics.map((img, index) => (
                        <SwiperSlide key={index}>
                          <LazyLoadImage effect="blur" src={img} alt={`Product image ${index + 1}`} className="mx-auto max-h-[210px] h-auto object-contain" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </figure>
                ))}
              </div>
            </div>
          </div>

          <div className='flex-1 px-[3rem]'>

            <div className='text-gray-900 text-[1.5rem] font-bold'> {productsData?.name?.englishname} ({productsData?.categories?.name_eng})</div>
            <div className='text-gray-900 text-[1rem] mt-3'> {productsData?.tech_name?.english_tech_name} </div>
            <div className='text-gray-900 text-[1rem] mt-3 flex gap-x-3'> <div className='w-[8rem]'>Packing </div> : {productsData?.packaging}  {productsData?.packagingtype?.type_eng}  </div>
            <div className='text-gray-900 text-[1rem] mt-3 flex gap-x-3'> <div className='w-[8rem]'> Available Qty </div> : {productsData?.avl_qty} </div>
            <div className='text-gray-900 text-[1rem] mt-3 flex gap-x-3'> <div className='w-[8rem]'>Company </div> : {productsData?.company?.name_eng} </div>

            <div className='text-gray-900 text-[1rem] mt-3 flex gap-x-3'> <div className='w-[8rem]'>Price (₹) </div> :  {productsData?.price}</div>
            <div className='text-gray-900 text-[1rem] mt-3 flex gap-x-3'> <div className='w-[8rem]'>Discount </div> : {productsData?.discount}</div>
            <div className='text-gray-900 text-[1rem] mt-3 flex gap-x-3'> <div className='w-[8rem]'>Batch No </div>  : {productsData?.batch_no.replace(/"/g, '')}</div>
            <div className='text-gray-900 text-[1rem] mt-3 flex gap-x-3'> <div className='w-[8rem]'> HSN Code </div> : {productsData?.hsn_code.replace(/"/g, '')}</div>
            <div className='text-gray-900 text-[1rem] mt-3 flex gap-x-3'> <div className='w-[8rem]'> SGST </div> : {productsData?.s_gst}</div>
            <div className='text-gray-900 text-[1rem] mt-3 flex gap-x-3'> <div className='w-[8rem]'> CGST </div> : {productsData?.c_gst}</div>
            <div className="flex items-center gap-x-[4rem] mt-[2rem]">
              <div className="flex items-center border border-green-600 rounded-lg w-[100px] overflow-hidden">
                <button className="w-[60px] h-[35px] text-center bg-gray-200 hover:bg-green-600 border-r border-green-600 text-[#222222]"  > − </button>
                <input id="quantity" type="text" defaultValue="1" className="w-[40px] text-center border-none m-0 p-0 focus:outline-none" />
                <button className="w-[60px] h-[35px] text-center bg-gray-200 hover:bg-green-600 border-l border-green-600 text-[#222222]"> + </button>
              </div>

              <button className="text-gray-50 px-4 py-2 text-md flex items-center gap-1 rounded-full flex items-center justify-center bg-green-600 border border-[#d8d8d8] hover:bg-green-500 hover:text-white transition-all duration-300"> Add to Cart <FaCartShopping />  </button>
            </div>
          </div>
        </div>

        <div className="mt-12 px-3">
          <h3 className="text-[1.5rem] font-semibold text-gray-700 mb-2 dark:text-gray-100">Description</h3>
          {productsData?.description && productsData?.description.map((data: any, index: number) => (
            <div key={index} className="mb-4 p-4 rounded-lg shadow-sm">

              <div className="flex flex-col gap-2 ">
                <div className="font-bold text-gray-600 dark:text-gray-100 text-[1.2rem] flex gap-x-3"> <IoArrowRedoSharp className='self-center' /> {data.englishHeader} </div>
                <div className="font-medium text-gray-600 dark:text-gray-100  flex gap-x-3"> <div className='h-4 w-4 flex self-top pt-1'> <SiBattledotnet /> </div> <div className='text-[0.9rem]'> {data.englishValue} </div> </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="md:grid  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-1600"> 
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

              <div className="flex items-center justify-between">
                <div className="flex items-center border border-[#E2E2E2] rounded w-[85px] overflow-hidden">
                  <button className="w-[26px] h-[26px] text-center bg-white border-r border-[#E2E2E2] text-[#222222]"> − </button>
                  <input id="quantity" type="text" defaultValue="1" className="w-[28px] text-center border-none m-0 p-0 focus:outline-none" />
                  <button className="w-[26px] h-[26px] text-center bg-white border-l border-[#E2E2E2] text-[#222222]"> + </button>
                </div>
               
                <button className="text-gray-50 px-4 py-2 text-md flex items-center gap-1 rounded-full flex items-center justify-center bg-green-600 border border-[#d8d8d8] hover:bg-green-500 hover:text-white transition-all duration-300"> Add to Cart <FaCartShopping />  </button>
              </div>
            </div>
          ))} 
       </div> */}

      <div>

        <div className="text-[2rem] font-semibold text-gray-900 font-heading"> {t("Relevant Category Products")}  </div>

        <div className="md:grid  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-1600">
          {products.map((product) => (
            <div key={product.id} className="relative p-4 bg-white border border-[#FBFBFB] shadow-[0px_5px_22px_rgba(0,0,0,0.04)] rounded-2xl mb-7 hover:shadow-[0px_21px_44px_rgba(0,0,0,0.08)] transition-shadow duration-300">
              <figure className="bg-[#F9F9F9] rounded-[12px] text-center mb-4">
                <Swiper modules={[Navigation, Autoplay]} spaceBetween={16} slidesPerView={1} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} >
                  {product.image.map((img, index) => (
                    <SwiperSlide key={index}>
                      <LazyLoadImage effect="blur" src={img} alt={`Product image ${index + 1}`} className="mx-auto max-h-[210px] h-auto object-contain" />
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

              <div className="flex items-center justify-between">
                <div className="flex items-center border border-[#E2E2E2] rounded w-[85px] overflow-hidden">
                  <button className="w-[26px] h-[26px] text-center bg-white border-r border-[#E2E2E2] text-[#222222]"> − </button>
                  <input id="quantity" type="text" defaultValue="1" className="w-[28px] text-center border-none m-0 p-0 focus:outline-none" />
                  <button className="w-[26px] h-[26px] text-center bg-white border-l border-[#E2E2E2] text-[#222222]"> + </button>
                </div>

                <button className="text-gray-50 px-4 py-2 text-md flex items-center gap-1 rounded-full flex items-center justify-center bg-green-600 border border-[#d8d8d8] hover:bg-green-500 hover:text-white transition-all duration-300"> Add to Cart <FaCartShopping />  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsSection