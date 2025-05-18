import React from 'react';

const DiscountBannerSection: React.FC = () => {
  return (
    <section className="py-5">
      <div className="w-full">
        <div className="bg-[#e6f3fb] bg-no-repeat py-10 my-10 rounded-[2.5rem] text-white" style={{ backgroundImage: "url('/images/bg-leaves-img-pattern.png')"}} >
          <div className="max-w-1600  mx-auto px-4 my-10">
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-full md:w-1/2 col-md-6 p-5">
                <div className="mb-4">
                  <h2 className="text-3xl md:text-[4.25rem] md:leading-[4rem] text-gray-900 font-heading font-bold leading-snug">
                    Get
                    <span className="text-yellow-500">  25% Discount </span>
                    on your first purchase
                  </h2>
                </div>
                <p className="text-gray-600 mt-[3rem]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dictumst amet, metus, sit massa posuere maecenas. At tellus ut
                  nunc amet vel egestas.
                </p>
              </div>

              {/* Right Form */}
              <div className="w-full md:w-1/2 p-5">
                <form className="bg-white rounded-lg p-6 text-gray-900 shadow-md">
                  <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 font-semibold"> Name </label>
                    <input type="text" id="name" name="name"  placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-semibold">
                      Email
                    </label>
                    <input type="email" id="email" name="email" placeholder="abc@mail.com"  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"  />
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="subscribe"
                      name="subscribe"
                      value="subscribe"
                      className="mr-2"
                    />
                    <label htmlFor="subscribe" className="text-sm">
                      Subscribe to the newsletter
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 text-lg font-semibold rounded hover:bg-gray-800 transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountBannerSection;
