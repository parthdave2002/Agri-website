import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';
import { toast, ToastContainer } from "react-toastify";
import { getProductlist } from '../../Store/Product/action';
import { useLocation, useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CartItemProps, Product, ProductDetails } from '../../types/types';
import { useTranslation } from "react-i18next";
import GlobalLoader from '../../component/Loader/Loader';
// const IMG_URL = import.meta.env["VITE_API_URL"];
const IMG_URL = import.meta.env.VITE_API_URL; 

const PAGE_SIZE = 12;

const ProductSection = () => {
  const [is_loader, set_is_loader] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const currentLang = i18n.language;

  const [category, setCategory] = useState("");

  //   // ------------ Add to cart start ----------
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [productQuantities, setProductQuantities] = useState<{ [key: string]: number }>({});

  const AddCall = (item: ProductDetails) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const quantity = typeof productQuantities[item._id] !== "undefined" ? productQuantities[item._id] : 1;

    setCartItems((prevItems: any) => {
      const existingIndex = prevItems.findIndex((i: any) => i._id === item._id);

      if (existingIndex > -1) {
        // toast.info("Product is already in the cart.");
        return prevItems;
      }

      const updatedCart = [...prevItems, { ...item, quantity }];
      localStorage.setItem("product", JSON.stringify(updatedCart));
      window.dispatchEvent(new Event("cartChanged"));
      return updatedCart;
    });
  };

  const removeFromCart = (productId: string) => {
    const updatedCart = cartItems.filter((item: any) => item._id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("product", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartChanged"));
  };

  const incrementQty = (productId: string) => {
    setProductQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const decrementQty = (productId: string) => {

    setProductQuantities((prev) => {
      const currentQty = prev[productId] || 1;
      return {
        ...prev,
        [productId]: currentQty > 1 ? currentQty - 1 : 1,
      };
    });
    // setCartItems((prev) =>
    //   prev.map((item: any) =>
    //     item._id === productId && item.quantity > 1
    //       ? { ...item, quantity: item.quantity - 1 }
    //       : item
    //   )
    // );
  };

    /* -------------------- INITIAL CATEGORY FROM ROUTE -------------------- */
  const data = location.state?.filter;
  const categoryKeyToLabelMap: Record<string, string> = {
    "category.plant_protection": "Crop Protection",
    "category.plant_nutrition": "Crop Nutrients",
    "category.fertilizer": "Fertilizer",
    "category.seed": "Seeds",
    "category.hardware": "Hardware",
    "category.animal_husbandry": "Animal Husbandry",
  };

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (data) {
    const readableCategory = categoryKeyToLabelMap[data];
    setCategory(readableCategory || "");
    setPage(1);
    setProducts([]);
    setHasMore(true);
    dispatch(getProductlist({ page: 1, is_active: true , size: 12, search: readableCategory || "" }));
    set_is_loader(true);
  }else{
   setPage(1);
    setProducts([]);
    setHasMore(true);
    dispatch(getProductlist({ page: 1, size: 12, is_active:true}));
    set_is_loader(true); 
  }
}, [data, dispatch]);

 // ------------ Add to cart end ----------

  const SearchCall = () => {
    if (search && !category) {
      setPage(1);
      setProducts([]);
      setHasMore(true);
      setCategory("")
      dispatch(getProductlist({ search: search, page: 1, size: 12, is_active:true }));
      set_is_loader(true);
    }
    else if (category) {
      setPage(1);
      setProducts([]);
      setHasMore(true);
      dispatch(getProductlist({ search: category, page: page, size: 12, is_active:true }));
      set_is_loader(true);
    } else {
      setPage(1);
      setProducts([]);
      setHasMore(true);
      dispatch(getProductlist({ page: page, size: 12, is_active:true }));
      set_is_loader(true);
    }
  }

  // useEffect(() =>{
  //     setPage(1);
  //     setProducts([]);
  //     setHasMore(true);
  //     dispatch(getProductlist( { page: page,  size: 12, search : category} ));
  //     set_is_loader(true);
  // },[dispatch])

  /* -------------------- STATE -------------------- */
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const observerRef = useRef<HTMLDivElement | null>(null);

  /* -------------------- REDUX -------------------- */
  const productResponse = useSelector(
    (state: any) => state.Product.Productlist
  );



  /* -------------------- API CALL -------------------- */
  useEffect(() => {
    if (!hasMore) return;
setLoading(true);

    dispatch(
      getProductlist({
        page,
        size: PAGE_SIZE,
        search: search || category,
        is_active:true
      })
    );
  }, [page, search, category]);

  /* -------------------- HANDLE API RESPONSE -------------------- */
  useEffect(() => {
    setLoading(false);
    set_is_loader(false);
    const newData = productResponse?.data || [];
     setProducts((prev) =>
    page === 1 ? newData : [...prev, ...newData]
  );
    
  setHasMore(newData.length === PAGE_SIZE);
    setLoading(false);
  }, [productResponse]);

  /* -------------------- INFINITE SCROLL -------------------- */
const pageRef = useRef(1);
useEffect(() => {
  if (!observerRef.current || !hasMore) return;

  const observer = new IntersectionObserver(([entry]:any) => {
      if (entry.isIntersecting) {
        setPage((prev) => {
          if (pageRef.current === prev) {
            pageRef.current += 1;
            return prev + 1;
          }
          return prev;
        });
      }
    },
    {
      root: null,
      rootMargin: "200px",
      threshold: 0,
    }
  );

  observer.observe(observerRef.current);

  return () => observer.disconnect();
}, [hasMore]);

  /* -------------------- HANDLERS -------------------- */
  const handleDropdownChange = (value: string) => {
    setCategory(value);
    setSearch("");
    setPage(1);
    setProducts([]);
    setHasMore(true);
  };

  useEffect(() => {
  setPage(1);
  pageRef.current = 1;
  setHasMore(false);
  setProducts([]);        
  setLoading(false);
}, [search, category]);


  const DetailspageCall = (id: string) => {
    navigate(`/product-detail/${id}`);
  };

   return (
    <div>
          {is_loader ?  <GlobalLoader />
              : 
         <div className='bg-gray-100 p-4'>
           <div className="my-5 w-full flex flex-col items-center">
             <div className="flex w-full max-w-2xl justify-between items-center gap-4">

               {/* Search Input (left side) */}
               <div className="flex flex-grow shadow-md rounded-xl overflow-hidden bg-white">
                 <input type="text" placeholder={t("enter_product_name")} className="flex-grow px-4 py-3 text-[18px] font-heading outline-none bg-gray-50" value={search} onChange={(e: any) => setSearch(e.target.value)} onKeyDown={(e) => {
                   if (e.key === "Enter") {
                     SearchCall();
                   }
                 }} />
                 <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 text-[1.1rem] font-heading font-semibold transition" onClick={SearchCall} > {t("search")} </button>
               </div>

               <div className="w-48 shadow-md rounded-xl overflow-hidden bg-white border border-gray-200">
                 <select className="w-full h-full px-4 py-3 text-[18px] font-heading bg-gray-50 outline-none rounded-xl" value={category} onChange={(e) => handleDropdownChange(e.target.value)}>
                   <option value="null"> {t("category.select_category")}</option>
                   <option value="Crop Protection">{t("category.plant_protection")}</option>
                   <option value="Crop Nutrients">{t("category.plant_nutrition")}</option>
                   <option value="Fertilizer">{t("category.fertilizer")}</option>
                   <option value="Seeds">{t("category.seed")}</option>
                   <option value="Hardware">{t("category.hardware")}</option>
                   <option value="Animal Husbandry">{t("category.animal_husbandry")}</option>
                 </select>
               </div>
             </div>
           </div>

           {Array.isArray(products) && products.length > 0 ?
             
             <>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-1600 mx-auto"  >
               {products && products.map((product: any) => {
                 const cartItem = cartItems.find((item: any) => item._id === product._id);
                 return (
                   <div key={product.id} className="relative p-4 bg-white border border-[#FBFBFB] shadow-[0px_5px_22px_rgba(0,0,0,0.04)] rounded-2xl mb-7 hover:shadow-[0px_50px_50px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                     <figure className="bg-[#F9F9F9] rounded-[12px] text-center mb-4">
                       <Swiper modules={[Navigation, Autoplay]} spaceBetween={16} slidesPerView={1} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false, }} >
                         {product?.product_pics.map((img: any, index: number) => (
                           <SwiperSlide key={index}>
                             <LazyLoadImage effect="blur" src={`${IMG_URL}/public/product/${img}`} alt={`Product image ${index + 1}`} className="mx-auto max-h-[210px] w-[12rem] h-[12rem] object-contain cursor-pointer" onClick={() => DetailspageCall(product?._id)} />
                           </SwiperSlide>
                         ))}
                       </Swiper>
                     </figure>

                     <div className="flex justify-between items-center text-sm ">
                       <h3 className="block w-full font-heading font-semibold text-[16px] leading-[25px] capitalize text-[#333333] mb-1 cursor-pointer truncate max-w-[11rem]" onClick={() => DetailspageCall(product?._id)}> {currentLang === 'gj' ? product?.name?.gujaratiname : product?.name?.englishname} </h3>
                       <span className="font-normal font-heading text-[1rem] leading-[18px] flex gap-x-1">
                         <div> {product?.packaging}  </div>
                         <div>  {currentLang === 'gj' ? product?.packagingtype?.type_guj : product?.packagingtype?.type_eng}   </div>
                       </span>
                     </div>
                     <div className="block w-full  font-heading font-semibold text-[16px] leading-[25px] capitalize text-[#222222] mb-1 cursor-pointer" onClick={() => DetailspageCall(product?.id)}>Rs. {product?.price} </div>

                     {/* Quantity Counter & Add to Cart */}
                     <div className="flex items-center justify-between">
                       {!cartItem && (
                         <div className="flex items-center border border-[#E2E2E2] rounded w-[85px] overflow-hidden">
                           <button onClick={() => decrementQty(product._id)} className="w-[26px] h-[26px] text-center bg-white border-r border-[#E2E2E2] text-[#222222]"> − </button>
                           <input id="quantity" value={productQuantities[product._id] || 1} type="text" defaultValue="1" className="w-[28px] text-center border-none m-0 p-0 focus:outline-none" readOnly />
                           <button onClick={() => incrementQty(product._id)} className="w-[26px] h-[26px] text-center bg-white border-l border-[#E2E2E2] text-[#222222]"> + </button>
                         </div>
                       )}

                       {cartItem ?
                         <button className="text-red-600 px-4 py-2 text-md flex items-end ml-[7rem] rounded-full justify-end border border-[#d8d8d8] hover:bg-red-100 transition-all duration-300 mt-4" onClick={() => removeFromCart(product?._id)} >  {t("remove_from_cart")}</button>
                         : <button className="text-gray-50 px-4 py-2 text-md flex items-center gap-1 rounded-full flex items-center justify-center bg-green-600 border border-[#d8d8d8] hover:bg-green-500 hover:text-white transition-all duration-300" onClick={() => AddCall(product)}> {t("add_to_cart")} <FaCartShopping />  </button>
                       }
                     </div>
                   </div>
                 )
               }
               )}
             </div>

               {hasMore && (
                 <div ref={observerRef} className="h-20 flex justify-center items-center" >
                   {loading && <GlobalLoader />}
                 </div>
               )}
             </>
             : <div className='text-center text-2xl font-heading flex justify-center my-[6rem]'> <img src='/images/no-product-found.webp' /> </div>}

           <ToastContainer />
         </div>
          }
      </div>
  )
}

export default ProductSection