import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './component/Footer/footer'
import FeaturesSection from './pages/Features/Features'
import PopularSearches from './pages/Looking/LookingFor'
import ShopFasterSection from './pages/ShopFaster/ShopFaster'
import RecentBlogSection from './pages/RecentBlog/RecentBlog'
import JustarrivedSection from './pages/JustArrived/Justarrived'
import PopularProductSection from './pages/PopularProduct/PopularProduct'
import PromoBannerSection from './pages/PromotionBanner/PromotionBanner'
import DiscountBannerSection from './pages/DiscountBanner/DiscountBanner'
import BestSellingProductSection from './pages/BestSellingProduct/BestSellingProduct'
import BrandCarouselSection from './pages/Brand/Brand'
import CategoryCarouselSection from './pages/Category/Category'
import BannerSection from './pages/Banner/Banner'
import CartSection from './pages/Cart/Cart'
import Header from './component/Header/Header'

function App() {



  return (
    <>
      <Header />
     
      <BannerSection />
      <CategoryCarouselSection />
      <BrandCarouselSection />
      <PromoBannerSection />
      <BestSellingProductSection /> 
      <DiscountBannerSection />
      <PopularProductSection />
      <JustarrivedSection />
      <RecentBlogSection /> 
      <ShopFasterSection />
      <PopularSearches />
      <FeaturesSection />
      <Footer />
    </>
  )
}

export default App
