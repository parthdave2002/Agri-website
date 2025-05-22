import React, { useEffect } from 'react'
import LookingForSection from '../../component/Looking/LookingFor'
import PopularSearches from '../../component/PopularProduct/PopularProduct'
import PopularProductSection from '../../component/PopularProduct/PopularProduct'
import PromoBannerSection from '../../component/PromotionBanner/PromotionBanner'
import DiscountBannerSection from '../../component/DiscountBanner/DiscountBanner'
import BestSellingProductSection from '../../component/BestSellingProduct/BestSellingProduct'
import BrandCarouselSection from '../../component/Brand/Brand'
import CategoryCarouselSection from '../../component/Category/Category'
import BannerSection from '../../component/Banner/Banner'
import TestimonailSection from '../../component/Testimonial/Testimonail'

const HomeSection = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])


  return (
    <div>
      <BannerSection />
      <CategoryCarouselSection />
      <BestSellingProductSection />
      <DiscountBannerSection />
       <BrandCarouselSection />
      <PopularProductSection />
      <PromoBannerSection />
      <TestimonailSection />
      <LookingForSection />

    </div>
  )
}

export default HomeSection