import React from 'react';

const ZipCode = () => {
   return (
      <div className='mt-[33px]'>
            <label className='font-medium text-[14px] leading-[1] t-hue-dark' htmlFor="">Zip/Postal Code</label>
            <input placeholder='Zip/Postal Code' className='w-full p-[10px] font-normal text-[14px] leading-[1.5] t-hue-dark border border-[#EEEEEE] rounded-md mt-[10px]' type="text" />
      </div>
   );
};

export default ZipCode;