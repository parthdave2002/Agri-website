import React, { useEffect } from 'react'

const ContactusSection = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])

  return (
    <div>
       <div className="min-h-screen flex ">
     
      <div className="w-full md:w-1/2  text-white p-10 flex flex-col justify-between">
        <img src="/public/images/contact.jpg" />
      </div>

      <div className="w-full md:w-1/2 bg-white p-10">
        <h2 className="text-2xl font-semibold mb-8 font-heading">Contact us</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-md block mb-1 uppercase tracking-wide">First Name</label>
              <input type="text" placeholder="Enter your first name" className="w-full border-b border-green-600 focus:outline-none py-2" />
            </div>
            <div>
              <label className="text-md  block mb-1 uppercase tracking-wide">Last Name</label>
              <input type="text" placeholder="Enter your last name" className="w-full border-b border-green-600 focus:outline-none py-2" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-md  block mb-1 uppercase tracking-wide">Email</label>
              <input type="email" placeholder="Enter your email" className="w-full border-b border-green-600 focus:outline-none py-2" />
            </div>
            <div>
              <label className="text-md  block mb-1 uppercase tracking-wide">Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" className="w-full border-b border-green-600 focus:outline-none py-2" />
            </div>
          </div>
          <div>
            <label className="text-md  block mb-1 uppercase tracking-wide">Message</label>
            <textarea placeholder="Enter your message" className="w-full border-b border-green-600 focus:outline-none py-2" />
          </div>
          <button type="submit" className="mt-4 text-sm font-medium text-black  border border-green-500 px-8 py-2 flex justify-center hover:bg-green-600 hover:text-white inline-flex items-center"> Submit <span className="ml-2">→</span>   </button>
        </form>

        
      </div>
    </div>
    </div>
  )
}

export default ContactusSection