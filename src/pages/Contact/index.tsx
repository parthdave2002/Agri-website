import React, { useEffect, useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input, FormFeedback, Button } from "reactstrap";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import { AddLeadlist } from '../../Store/Lead/action';

const ContactusSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [])

  const [initialValues, setinitialValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: ""
  });

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    
    validationSchema: Yup.object({
      first_name: Yup.string().required("Please enter first name"),
      last_name: Yup.string().required("Please enter last name"),
      email: Yup.string().required("Please enter email"),
      phone_number: Yup.number().required("Please enter phone number").min(10, "Phone number must be minimum 10 digits"),
    }),
        
    onSubmit: (values:any) => {

      let requserdata = {
        first_name: values?.first_name,
        last_name: values?.last_name,
        email : values?.email,
        phone_number: values?.phone_number,
        type: "Contact us"
      };
      dispatch(AddLeadlist(requserdata));
    },
    });

  return (
    <div>
      <div className="min-h-screen md:flex ">
        <div className="w-full md:w-1/2  text-white p-10 flex flex-col justify-between">
          <LazyLoadImage effect="blur" src="/images/contact-2.jpg" className="transform scale-x-[-1]" />
        </div>

        <div className="w-full md:w-1/2 bg-white p-10">
          <h2 className="text-2xl font-semibold mb-8 font-heading">Contact us</h2>

          <Form onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }} >
                        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
              <div className="flex-1">
                <label className="text-md block mb-1 uppercase tracking-wide">First Name  <span className='text-red-500'>*</span></label>
                <div className="mt-1">
                  <Input
                    id="first_name"
                    name="first_name"
                    className="w-full border-b border-green-600 focus:outline-none py-2"
                    placeholder="Enter your first name"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.first_name || ""}
                    invalid={validation.touched.first_name && validation.errors.first_name ? true : false}
                  />
                  {validation.touched.first_name && validation.errors.first_name ? (<FormFeedback type="invalid" className="text-red-500 text-sm"> {validation.errors.first_name} </FormFeedback>) : null}
                </div>
              </div>

              <div className="flex-1">
                <label className="text-md block mb-1 uppercase tracking-wide">Last Name  <span className='text-red-500'>*</span></label>

                <div className="mt-1">
                  <Input
                    id="last_name"
                    name="last_name"
                    className="w-full border-b border-green-600 focus:outline-none py-2"
                    placeholder="Enter your last name"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.last_name || ""}
                    invalid={validation.touched.last_name && validation.errors.last_name ? true : false}
                  />
                  {validation.touched.last_name && validation.errors.last_name ? (<FormFeedback type="invalid" className="text-red-500 text-sm"> {validation.errors.last_name}  </FormFeedback>) : null}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className=' mt-[2.5rem]'>
                <label className="text-md block mb-1 uppercase tracking-wide">Email <span className='text-red-500'>*</span></label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    className="w-full border-b border-green-600 focus:outline-none py-2"
                    placeholder="Enter your email"
                    type="text"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.email || ""}
                    invalid={validation.touched.email && validation.errors.email ? true : false}
                  />
                  {validation.touched.email && validation.errors.email ? (<FormFeedback type="invalid" className="text-red-500 text-sm"> {validation.errors.email} </FormFeedback>) : null}
                </div>
              </div>

              <div className=' mt-[2.5rem]' >
                <label className="text-md block mb-1 uppercase tracking-wide"> Phone Number  <span className='text-red-500'>*</span></label>

                <div className="mt-1">
                  <Input
                    id="phone_number"
                    name="phone_number"
                    className="w-full border-b border-green-600 focus:outline-none py-2"
                    placeholder="Enter phone number"
                    type="number"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.phone_number || ""}
                    invalid={validation.touched.phone_number && validation.errors.phone_number ? true : false}
                  />
                  {validation.touched.phone_number && validation.errors.phone_number ? (<FormFeedback type="invalid" className="text-red-500 text-sm"> {validation.errors.phone_number}  </FormFeedback>) : null}
                </div>
              </div>
            </div>

            <div className=' mt-[2.5rem]' >
              <label className="text-md  block mb-1 uppercase tracking-wide">Message  <span className='text-red-500'>*</span> </label>
              <textarea placeholder="Enter your message" className="w-full border-b border-green-600 focus:outline-none py-2" />
            </div>

            <button type="submit" className=" text-sm font-medium text-black  border border-green-500 px-8 py-2 flex justify-center hover:bg-green-600 hover:text-white inline-flex items-center md:mt-[4rem]"> Submit <span className="ml-2">→</span>   </button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ContactusSection