import React from "react";

const EstimateDropdown = () => {
  return (
    <div>
      <select
        className="w-full border-0 font-bold text-[17px] leading-[1.2] t-hue-base p-[10px]"
        name=""
        id=""
      >
        <option className="ps-10" value="">
          Estimate Shipping
        </option>
        <option value="">Estimate Shipping 1</option>
        <option value="">Estimate Shipping 2</option>
        <option value="">Estimate Shipping 3</option>
      </select>
      <hr className="text-[#EEEEEE] mt-[10px]" />
    </div>
  );
};

export default EstimateDropdown;
