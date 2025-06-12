import React from 'react';

const DiscountBannerSection: React.FC = () => {
  return (
    <section className="py-5">
      <div className="w-full">
        <div className="bg-[#e6f3fb] bg-no-repeat py-10  rounded-[1rem] text-white" style={{ backgroundImage: "url('/images/bg-leaves-img-pattern.png')"}} >
          <div className='text-green-700 text-[2rem] font-heading flex flex-col  md:flex-row  justify-around '>
          <div>
            <div className=''>  300+</div>
            <div> Brands</div>
          </div>

          <div>
          <div> 20M+ </div>
          <div> Happy Farmers</div>
          </div>

          <div>
          <div> 5K+</div>
          <div>Products</div>
          </div>

          <div>
          <div>15K+ </div>
          <div>Pincodes Delivery</div> 
          </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBannerSection;
