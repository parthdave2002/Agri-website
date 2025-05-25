import { useState } from "react";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

interface CartProps{
    cartOpen : boolean;
    onClose : any;
    OrderPlaced : any;
}

interface CartItemProps {
  image: string;
  title: string;
  price: number;
  quantity: number;
  // onDelete: () => void;
  // onIncrement: () => void;
  // onDecrement: () => void;
}

const CartItemData : CartItemProps []=[
{
  image : "/images/thumb-tomatoes.png",
  title :"Farmer wefwefwefwefwef",
  price : 500,
  quantity: 1,
},
{
  image : "/images/thumb-tomatoes.png",
  title :"Farmer sdsd",
  price : 500,
  quantity: 1,
},
{
  image : "/images/thumb-tomatoketchup.png",
  title :"Farmer wefwefwefwefwef",
  price : 500,
  quantity: 1,
},
{
  image : "/images/thumb-tomatoketchup.png",
  title :"Farmer wefwefwefwefwef",
  price : 500,
  quantity: 1,
},
{
  image : "/images/thumb-tomatoketchup.png",
  title :"Farmer wefwefwefwefwef",
  price : 500,
  quantity: 1,
},
{
  image : "/images/thumb-tomatoketchup.png",
  title :"Farmer wefwefwefwefwef",
  price : 500,
  quantity: 1,
}
]

const CartSection: React.FC  <CartProps>= ( { cartOpen, onClose, OrderPlaced } ) => {

  const handleDelete = () => alert('Deleted!');
  const handleInc = () => alert('Incremented!');
  const handleDec = () => alert('Decremented!');


  
  return (
    <>
      <div className={`fixed top-0 right-0 z-50 h-full w-80  md:w-[25rem] bg-white shadow-lg transition-transform duration-300 ${  cartOpen ? "translate-x-0" : "translate-x-full" }`} aria-labelledby="My Cart"  role="dialog" >
        <div className="flex justify-between px-4 py-3 ">
          <div></div>
          <h4 className=" items-center  text-[2rem] font-semibold font-heading">  <span className="text-green-600 self-center flex gap-x-3"> Cart <FaShoppingCart className="self-center"  /></span> </h4>
          <button  onClick={onClose}  className="text-gray-500 hover:text-gray-700" aria-label="Close"> <IoClose size={24} /></button>
        </div>

        <div className="p-2 md:p-4">
          <div className="md:h-[27rem]  md:max-h-[27rem] overflow-scroll" >
              {CartItemData && CartItemData.map(( item:any, key ) =>{
                  return(
                    <div className="flex items-center justify-between border-b py-3">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-green-400 flex items-center justify-center rounded-full"> <img src={item?.image} alt={item?.title} className="w-16 h-16 object-contain" /> </div>
                  </div>

                    <div className="text-left md:max-w-[13rem] md:w-[13rem]  w-[10rem] md:max-w-[10rem]">
                      <p className="text-md  md:text-lg font-medium truncate ">{item?.title}</p>
                      <p className="text-md md:text-xl font-semibold text-gray-800">₹{item?.price}</p>
                        <div className="flex items-center justify-center space-x-3">
                            <button onClick={handleDec} className="text-white p-1 bg-green-600 rounded-full hover:bg-green-700"> <FaMinus />  </button>
                            <span className="text-xl font-semibold">{item?.quantity}</span>
                            <button onClick={handleInc} className="text-white p-1 bg-green-600 rounded-full hover:bg-green-700">  <FaPlus />  </button>
                          </div>
                      </div>

                  <button onClick={handleDelete} className="text-xl text-white  p-2  rounded-full bg-green-600"  >  <MdDelete />   </button>
                    </div>
                  )
              })}
          </div>

            <div className="p-4 border-t">  <button className="w-full bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700 transition" onClick={OrderPlaced}>  Place Order </button> </div>
        </div>
      </div>    

    </>
  );
}

export default  CartSection