import React, {useContext} from "react";
import {CartContext} from "../../Cart.jsx"

const TotalPrice = () => {
    const {ItemsTotal} = useContext(CartContext)
    const deliveryPrice = 2;
    // console.log('grandTotal', grandTotal)
  return (
    <div className="mt-[26px]">
      <p className="flex justify-between pb-[10px]">
        <span className="font-normal text-[14px] leading-[1.7] t-hue-dark">Sub-Total</span>
        <span className="font-medium text-[14px] leading-[1.7] t-hue-dark tracking-[0.32px]">${ItemsTotal}</span>
      </p>
      <p className="flex justify-between pb-[10px]">
        <span className="font-normal text-[14px] leading-[1.7] t-hue-dark">Delivery Charges</span>
        <span className="font-medium text-[14px] leading-[1.7] t-hue-dark tracking-[0.32px]">${deliveryPrice}</span>
      </p>
      <p>
        {/* <span className="font-normal text-[14px] leading-[1.7] t-hue-dark">Coupon Discount</span> */}
        <p className="font-medium text-[14px] leading-[1.7] primary-color tracking-[0.32px] mb-2">Apply Coupon</p>
        <input type="text" />
      </p>
      <hr className="text-[#EEEEEE] mt-[18px]" />
      <p className="flex justify-between  pt-[20px]">
        <span className="font-medium text-[16px] leading-[1.5] t-hue-dark">Total Amount</span>
        <span className="font-medium text-[14px] leading-[1.5] t-hue-dark tracking-[0.32px]">$232.40</span>
      </p>
    </div>
  );
};

export default TotalPrice;
