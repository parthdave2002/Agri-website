import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';
import { toast } from "react-toastify";
import { getProductlist } from '../../Store/Product/action';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Product } from '../../types/types';
const IMG_URL = import.meta.env["VITE_API_URL"];

const ProductSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])

  const isFetchingRef = useRef(false); 
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() =>{
    if (!hasMore || isFetchingRef.current) return;
    isFetchingRef.current = true;
    dispatch(getProductlist(page))
  },[page])

  //------------- Get data from redux code start -------------
  const productdetail: any = useSelector((state: any) => state?.Product.Productlist);

  const[productsData, setproductsData] = useState<Product[]>([]);
  useEffect(() => {
    if (productdetail?.success === true) {
      const newData = productdetail?.data || [];
      if (newData.length === 0) {
        setHasMore(false);
      } else {
        setproductsData(prev => [...prev, ...newData]);
      }
      isFetchingRef.current = false;
    }
    else if (productdetail?.data?.success === false) {
      toast.error(productdetail?.msg);
      isFetchingRef.current = false;
    }
  }, [productdetail]);
  //------------- Get data from redux code end -------------

  // ------------ Details page start --------
    const DetailspageCall = (id:string | number) =>{
        navigate(`/product-detail/${id}`)
    }
  // ------------ Details page end --------

    const [products, setProductsList] = useState<any>([]);
    const [TotalListData, setTotalListData] = useState(0);
    const [CurrentPageNo, setCurrentPageNo] = useState(0);

    console.log("products", products);
    

    const { Productlist,  ProductlistSize, TotalProductData, CurrentPage } = useSelector((state: any) => ({
      Productlist: state.Product.Productlist,
      ProductlistSize: state.Product.ProductlistSize,
      TotalProductData: state.Product.TotalProductData,
      CurrentPage: state.Product.CurrentPage,
    }));

    useEffect(() => {        
      setProductsList(Productlist ? Productlist?.data  :[]);
      setTotalListData(TotalProductData ? TotalProductData : 0);
      setCurrentPageNo(CurrentPage ? CurrentPage : 1);
    }, [Productlist,  ProductlistSize, TotalProductData, CurrentPage]);

  // ------------ Add to cart start ----------
    const AddCall = (data:Product) =>{
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  // ------------ Add to cart end ----------

  // ------------ Scroll to load more start ----------

    useEffect(() => {
      const handleScroll = () => {
        if (!hasMore) return;

        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= fullHeight - 300 && !isFetchingRef.current && hasMore) {
          setPage(prev => prev + 1); // Increase page => triggers new fetch
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [hasMore]);
    
  // ------------ Scroll to load more end ----------
  return (
    <div>
      <div className="md:grid  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-1600">
        {products.map((product) => (
          <div key={product.id} className="relative p-4 bg-white border border-[#FBFBFB] shadow-[0px_5px_22px_rgba(0,0,0,0.04)] rounded-2xl mb-7 hover:shadow-[0px_21px_44px_rgba(0,0,0,0.08)] transition-shadow duration-300">
            <figure className="bg-[#F9F9F9] rounded-[12px] text-center mb-4">
              <Swiper modules={[Navigation, Autoplay]} spaceBetween={16} slidesPerView={1} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} >
                {product?.product_pics.map((img, index) => (
                  <SwiperSlide key={index}>
                    <LazyLoadImage effect="blur"  src= {  `${IMG_URL}/public/product/${img}`}  alt={`Product image ${index + 1}`} className="mx-auto max-h-[210px] w-[12rem] h-[12rem] object-contain" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </figure>

            <div className="flex justify-between items-center text-sm ">
              <h3 className="block w-full font-heading font-semibold text-[18px] leading-[25px] capitalize text-[#333333] mb-1 cursor-pointer truncate max-w-[11rem]" onClick={() => DetailspageCall(product?.id)}> {product?.name?.englishname} </h3>
              <span className="font-normal font-heading text-[1.2rem] leading-[18px]  uppercase flex gap-x-1">
                <div> {product?.packaging}  </div>
                <div> {product?.packagingtype?.type_eng}  </div>
              </span>
            </div>

            {/* <div className="flex justify-between items-center text-sm py-2">
              <span className="font-normal text-[13px] leading-[18px] tracking-[0.02em] text-[#9D9D9D] flex gap-x-1">
                <div> Avl. Qty.  : </div>
                <span className="font-normal text-[13px] leading-[18px] tracking-[0.02em] uppercase text-[#9D9D9D]">{product?.avl_qty} </span>
              </span>
              
            </div> */}

            <div className="block w-full  font-heading font-semibold text-[18px] leading-[25px] capitalize text-[#222222] mb-1 cursor-pointer" onClick={() => DetailspageCall(product?.id)}>Rs. {product?.price} </div>

            {/* Quantity Counter & Add to Cart */}
            <div className="flex items-center justify-between">
              <div className="flex items-center border border-[#E2E2E2] rounded w-[85px] overflow-hidden">
                <button className="w-[26px] h-[26px] text-center bg-white border-r border-[#E2E2E2] text-[#222222]"> − </button>
                <input id="quantity" type="text" defaultValue="1" className="w-[28px] text-center border-none m-0 p-0 focus:outline-none" />
                <button className="w-[26px] h-[26px] text-center bg-white border-l border-[#E2E2E2] text-[#222222]"> + </button>
              </div>

              <button className="text-gray-50 px-4 py-2 text-md flex items-center gap-1 rounded-full flex items-center justify-center bg-green-600 border border-[#d8d8d8] hover:bg-green-500 hover:text-white transition-all duration-300" onClick={() => AddCall(product)}> Add to Cart <FaCartShopping />  </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductSection