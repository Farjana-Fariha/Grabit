import React from 'react';

const CountryDropdown = () => {
   return (
      <div>
      <label className='font-medium text-[14px] leading-[1] t-hue-dark mb-[10px]' htmlFor="">Country *</label>
      <select
        className="w-full p-[10px] font-normal text-[14px] leading-[1.5] t-hue-base border border-[#EEEEEE] rounded-md bg-white mt-[10px]"
        name=""
        id=""
      >
        <option className="" value="">
          Country
        </option>
        <option value="">Bangladesh</option>
        <option value="">USA</option>
      </select>
    </div>
   );
};

export default CountryDropdown;