import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';
import { toast } from "react-toastify";
import { getProductlist, GetProductViewlist } from '../../Store/Product/action';
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CartItemProps, Product, ProductDetails } from '../../types/types';
import { useTranslation } from "react-i18next";
import CartSection from '../Cart/Cart';
const IMG_URL = import.meta.env["VITE_API_URL"];

const ProductSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

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
    let requser = {
      page : page,
      size : 12 
    }
    dispatch(getProductlist(requser))
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
    const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

    const AddCall = (item: ProductDetails) => {
      // window.scrollTo({ top: 0, behavior: "smooth" });
      setCartItems((prevItems: any) => {
        const existingIndex = prevItems.findIndex((i: any) => i?.name?.englishname === item?.name?.englishname);

        if (existingIndex > -1) {
          const updated = [...prevItems];
          updated[existingIndex].quantity += 1;
          return updated;
        }

        // Add `quantity: 1` for new item
        return [...prevItems, { ...item, quantity: 1 }];
      });
    };
    
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

     const [searchData, setSearchData] = useState("");
  const SearchCall = () =>{
    if(searchData){
      dispatch(getProductlist({search : searchData}))
    }
  }

  const OrderPlaced = () => {
    console.log("calll")
  }
   return (
    <div>

      <div className="my-5 flex justify-center">
        <div className="flex w-full max-w-xl shadow-md rounded-xl overflow-hidden bg-white">
          <input type="text"  placeholder="Enter product name"  className="flex-grow px-4 py-3  text-[19px] font-heading outline-none bg-gray-50" onChange={(e:any) => setSearchData(e.target.value)} />
          <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 text-[1.2rem] font-heading font-semibold transition" onClick={SearchCall}>  Search  </button>
        </div>
      </div>
      <div className="md:grid  md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-1600">
        {products && products.map((product:any) => (
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
              <h3 className="block w-full font-heading font-semibold text-[16px] leading-[25px] capitalize text-[#333333] mb-1 cursor-pointer truncate max-w-[11rem]" onClick={() => DetailspageCall(product?._id)}> {currentLang === 'gj' ? product?.name?.gujaratiname :   product?.name?.englishname} </h3>
              <span className="font-normal font-heading text-[1rem] leading-[18px] flex gap-x-1">
                <div> {product?.packaging}  </div>
                <div> {product?.packagingtype?.type_eng}  </div>
              </span>
            </div>
            <div className="block w-full  font-heading font-semibold text-[16px] leading-[25px] capitalize text-[#222222] mb-1 cursor-pointer" onClick={() => DetailspageCall(product?.id)}>Rs. {product?.price} </div>

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

      <CartSection  OrderPlaced={OrderPlaced} CartData={cartItems}  />
    </div>
  )
}

export default ProductSection