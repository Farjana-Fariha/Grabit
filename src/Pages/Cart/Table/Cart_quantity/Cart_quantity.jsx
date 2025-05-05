import React, { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import {  useContext } from "react";
import { AllDataContext } from "../../../../Root";

const Cart_quantity = ({item}) => {
  const {itemId, itemQuantity} = useContext(AllDataContext)

   const [quantity, setQuantity] = useState((item.id == itemId ? itemQuantity : 1))
  //  (item.id == itemId ? console.log(itemQuantity) : console.log(itemQuantity))
  //  console.log('cart quantity', cartQuantity)
   
   const handleIncreament = () => {
      setQuantity(quantity + 1);
    };
    const handledecreament = () => {
      if (quantity > 1) {
         setQuantity(quantity - 1)
      }
    };
   return (
            <div className="quantity-btn w-[84px] h-[35px] flex items-center justify-around font-medium leading-[2.4] border border-[#EEEEEE] rounded-md">
                     <div
                       onClick={()=> handleIncreament()}
                       className="increament cursor-pointer text-[#212529]"
                     >
                       <span className="font-normal text-[16px] leading-[1.5] t-hue-dark"><LuPlus></LuPlus></span>
                     </div>
                     <div className="quantity-display font-semibold text-[14px] leading-[2.7] t-hue-dark">
                       {quantity}
                     </div>
                     <div
                       onClick={()=> handledecreament()}
                       className="decreament flex items-center text-[#212529]"
                     >
                      <span className="font-normal text-[16px] leading-[1.5] t-hue-dark"> <LuMinus></LuMinus></span>
                     </div>
                   </div>
   );
};

export default Cart_quantity;