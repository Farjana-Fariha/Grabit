import React from 'react';

const SectionTitle = ({titleSuffix,titlePrefix, subtitle}) => {
   return (
      <div className='space-y-[clamp(7px,2vw,14px)] mb-[clamp(8px,2vw,40px)]'>
         <h3 className=' text-[clamp(13px,4vw,25px)] font-bold leading-[1] t-hue-dark capitalize'>{titleSuffix} <span className='primary-color'>{titlePrefix}</span></h3>
         <p className='text-[clamp(10px,2vw,14px)] font-light leading-[1.28] t-hue-base tracking-[0.32px]'>{subtitle}</p>
      </div>
   );
};

export default SectionTitle;