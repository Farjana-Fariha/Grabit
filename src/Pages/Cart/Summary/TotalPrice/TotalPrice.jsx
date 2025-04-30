import React from "react";

const TotalPrice = () => {
  return (
    <div className="mt-[26px]">
      <p className="flex justify-between pb-[10px]">
        <span className="font-normal text-[14px] leading-[1.7] t-hue-dark">Sub-Total</span>
        <span className="font-medium text-[14px] leading-[1.7] t-hue-dark tracking-[0.32px]">$160.00</span>
      </p>
      <p className="flex justify-between pb-[10px]">
        <span className="font-normal text-[14px] leading-[1.7] t-hue-dark">Delivery Charges</span>
        <span className="font-medium text-[14px] leading-[1.7] t-hue-dark tracking-[0.32px]">$32.40</span>
      </p>
      <p className="flex gap-x-[90px]">
        <span className="font-normal text-[14px] leading-[1.7] t-hue-dark">Coupon Discount</span>
        <p className="font-medium text-[14px] leading-[1.7] primary-color tracking-[0.32px] underline underline-offset-2">Apply Discount</p>
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
