import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface CartProps{
    cartOpen : boolean;
    onClose : any;
}

const CartSection: React.FC  <CartProps>= ( { cartOpen, onClose } ) => {
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-80 bg-white shadow-lg transition-transform duration-300 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
      aria-labelledby="My Cart"
      role="dialog"
    >
      <div className="flex justify-end p-4 border-b">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <IoClose size={24} />
        </button>
      </div>

      <div className="p-6">
        <div>
          <h4 className="flex justify-between items-center mb-4 text-lg font-medium">
            <span className="text-blue-600">Your cart</span>
            <span className="bg-blue-600 text-white rounded-full px-2 py-1 text-sm">
              3
            </span>
          </h4>

          <ul className="mb-4 space-y-3">
            <li className="flex justify-between border-b pb-2">
              <div>
                <h6 className="text-base font-medium">Growers cider</h6>
                <small className="text-gray-500">Brief description</small>
              </div>
              <span className="text-gray-700">$12</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <div>
                <h6 className="text-base font-medium">Fresh grapes</h6>
                <small className="text-gray-500">Brief description</small>
              </div>
              <span className="text-gray-700">$8</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <div>
                <h6 className="text-base font-medium">Heinz tomato ketchup</h6>
                <small className="text-gray-500">Brief description</small>
              </div>
              <span className="text-gray-700">$5</span>
            </li>
            <li className="flex justify-between font-medium pt-2">
              <span>Total (USD)</span>
              <strong>$25</strong> 
            </li>
          </ul>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition">  Continue to checkout </button>
        </div>
      </div>
    </div>
  );
}

export default  CartSection