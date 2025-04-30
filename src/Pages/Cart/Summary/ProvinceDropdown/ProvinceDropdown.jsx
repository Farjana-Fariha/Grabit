import React from 'react';

const ProvinceDropdown = () => {
   return (
      <div className="mt-[33px]">
      <label className='font-medium text-[14px] leading-[1] t-hue-dark mb-[10px]' htmlFor="">State/Province</label>
      <select
        className="w-full p-[10px] font-normal text-[14px] leading-[1.5] t-hue-base border border-[#EEEEEE] rounded-md bg-white mt-[10px]"
        name=""
        id=""
      >
        <option className="" value="">
          
        </option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
   );
};

export default ProvinceDropdown;