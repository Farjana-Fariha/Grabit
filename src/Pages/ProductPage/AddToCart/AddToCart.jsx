import React, { useState } from 'react';
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { getCartData, saveCartData } from '../../../Utility/locoalStorage';

const AddToCart = ({id, toast}) => {
  // Handle Increament and Decreament
  let [quantity, setQuantity] = useState(1);
  const handleIncreament = () => {
    setQuantity(quantity+1)
  }
  const handledecreament = () => {
    if(quantity > 1){
      setQuantity(quantity-1)
    }
  }
  // Add to Cart
  const handleAddToCart = (currId) => {
    const allCartId = getCartData()
    const exist = allCartId.find(id => id == currId);
    console.log(exist)
    if(!exist){
    toast('Added to Cart')
    }else{
    toast('Already added to Cart')
    }
    saveCartData(currId)

  }
   return (
      <div className="addToCart mt-10 flex items-center gap-[10px]">
      <div className="quantity-btn flex font-medium leading-[2.4] border border-[#EEEEEE] rounded-md">
        <div onClick={handleIncreament}  className="increament cursor-pointer px-[16px] flex items-center text-[#212529]">
          <LuPlus></LuPlus>
        </div>
        <div className="quantity-display px-[15px] t-hue-dark">{quantity}</div>
        <div onClick={handledecreament} className="decreament px-[16px] flex items-center text-[#212529]">
          <LuMinus></LuMinus>
        </div>
      </div>
      <button onClick={()=> handleAddToCart(id)} className="addToCard-btn uppercase font-semibold text-[14px] leading-[3] tracking-[0.32px] text-white bg-[#4B5966] px-[32px] py-0  rounded-md">
        Add to card
      </button>
      <button className="p-[12px] border border-[#EEEEEE] rounded-md">
        <FaRegHeart></FaRegHeart>
      </button>
      <button className="p-[12px] border border-[#EEEEEE] rounded-md">
        <FaRegEye></FaRegEye>
      </button>
    </div>
   );
};

export default AddToCart;