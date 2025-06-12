import React, { useState } from 'react'
import type { FC, PropsWithChildren } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Form, Input, FormFeedback, Button } from "reactstrap";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { AddLeadlist } from '../../Store/Lead/action';

interface HelpModalProps{
 isOpenDelteModel : boolean;
    setisOpenDelteModel : (value : boolean) => void;
}

const HelpModal: FC<HelpModalProps>= ({isOpenDelteModel, setisOpenDelteModel}) => {
    const dispatch = useDispatch()


    const [initialValues, setinitialValues] = useState({
      name: "",
      email: "",
      phone_number: ""
    });
  
    const validation = useFormik({
      enableReinitialize: true,
      initialValues: initialValues,
      
      validationSchema: Yup.object({
        name: Yup.string().required("Please enter  name"),
        phone_number: Yup.number().required("Please enter phone number").min(10, "Phone number must be minimum 10 digits"),
      }),
          
      onSubmit: (values:any) => {
  
        let requserdata = {
          name: values?.name,
          email : values?.email,
          phone_number: values?.phone_number,
          type: "Contact us"
        };
        dispatch(AddLeadlist(requserdata));
      },
      });

  return (
    <div>

           <Dialog open={isOpenDelteModel} onClose={setisOpenDelteModel} className="relative z-100">
              <DialogBackdrop   transition  className="fixed inset-0 bg-gray-800/90 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"  />

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <DialogPanel transition  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-[60rem] data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                          <div className="sm:flex sm:items-start">

                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">

                              <div className="mt-2">
                                      <div className="flex flex-col md:flex-row items-start">

                                        <div className="w-full md:w-1/2 p-5">
                                          <Form onSubmit={(e) => { e.preventDefault(); validation.handleSubmit(); return false; }}  className="bg-white rounded-lg p-6 text-gray-900 ">
                                            <div className="mb-4">
                                               <label className="text-md block mb-1 uppercase tracking-wide"> Name  <span className='text-red-500'>*</span></label>
                                                 <div className="mt-1">
                                                                <Input
                                                                  id="name"
                                                                  name="name"
                                                                  className="w-full border-b border-green-600 focus:outline-none py-2"
                                                                  placeholder="Enter your first name"
                                                                  type="text"
                                                                  onChange={validation.handleChange}
                                                                  onBlur={validation.handleBlur}
                                                                  value={validation.values.name || ""}
                                                                  invalid={validation.touched.name && validation.errors.name ? true : false}
                                                                />
                                                                {validation.touched.name && validation.errors.name ? (<FormFeedback type="invalid" className="text-red-500 text-sm"> {validation.errors.name} </FormFeedback>) : null}
                                                  </div>
                                            </div>
                                            {/* <div className="mb-4">
                                              <label htmlFor="email" className="block mb-1 font-semibold"> Phone Number </label>
                                              <input type="email" id="email" name="email" placeholder="abc@mail.com"  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"  />
                                            </div> */}
                                            <div className="mb-4">
                                               <label className="text-md block mb-1 uppercase tracking-wide"> Name  <span className='text-red-500'>*</span></label>
                                                 <div className="mt-1">
                                                                <Input
                                                                  id="name"
                                                                  name="name"
                                                                  className="w-full border-b border-green-600 focus:outline-none py-2"
                                                                  placeholder="Enter your first name"
                                                                  type="text"
                                                                  onChange={validation.handleChange}
                                                                  onBlur={validation.handleBlur}
                                                                  value={validation.values.name || ""}
                                                                  invalid={validation.touched.name && validation.errors.name ? true : false}
                                                                />
                                                                {validation.touched.name && validation.errors.name ? (<FormFeedback type="invalid" className="text-red-500 text-sm"> {validation.errors.name} </FormFeedback>) : null}
                                                  </div>
                                            </div>

                                            <div className="mb-4">
                                               <label className="text-md block mb-1 uppercase tracking-wide"> Name  <span className='text-red-500'>*</span></label>
                                                 <div className="mt-1">
                                                                <Input
                                                                  id="name"
                                                                  name="name"
                                                                  className="w-full border-b border-green-600 focus:outline-none py-2"
                                                                  placeholder="Enter your first name"
                                                                  type="text"
                                                                  onChange={validation.handleChange}
                                                                  onBlur={validation.handleBlur}
                                                                  value={validation.values.name || ""}
                                                                  invalid={validation.touched.name && validation.errors.name ? true : false}
                                                                />
                                                                {validation.touched.name && validation.errors.name ? (<FormFeedback type="invalid" className="text-red-500 text-sm"> {validation.errors.name} </FormFeedback>) : null}
                                                  </div>
                                            </div>
                                            
                                            <button    className="w-full bg-black text-white py-3 text-lg font-semibold rounded hover:bg-gray-800 transition">    Submit  </button>
                                          </Form>
                                        </div>

                                        <div className="w-full md:w-1/2 col-md-6 p-5">
                                          <div className="mb-4">
                                                <img src='/public/images/needhelp.jpg' />
                                          </div>
                                        </div>

                                        {/* Right Form */}
                                       
                                      </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      
                  </DialogPanel>
                </div>
              </div>
            </Dialog>

    </div>
  )
}

export default HelpModal