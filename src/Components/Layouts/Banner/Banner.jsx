import React from 'react';
import BannerImg from '../../../assets/Banner.png'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
   return (
      <div className='newapp section-container section-gap max-w-full relative'>
         <img className=' w-full h-auto block' src={BannerImg} alt="banner" />
         {/* Banner content */}
         <div className='  absolute h-full xl:left-[100px] lg:left-[80px] md:left-[50px] left-[20px] xl:top-43 lg:top-16 md:top-10 top-2 lg:max-w-[419px] md:max-w-[300px] max-w-[150px] space-y-[clamp(1px,2vw,20px)]'>
            <p className=' leading-[1] tracking-[0.8px] text-[clamp(6px,3vw,20px)] primary-color font-medium'>Starting at <span className=' font-bold'> $ 29.99</span></p>
            <h2 className='capitalize leading-[1.23] text-[clamp(14px,5vw,55px)] t-hue-dark font-bold'>Explore fresh &
            juicy fruits</h2>
            <button className=' leading-[1.4] text-[clamp(6px,3vw,15px)] text-white bg-[#4B5966] font-medium flex gap-x-1
             items-center px-[clamp(8px,2vw,14px)] py-[clamp(5px,1vw,11px)] rounded-md '>Shop Now <MdKeyboardDoubleArrowRight className='text-[clamp(6px,3vw,18px)]' /> </button>
         </div>
      </div> 
   );
};

export default Banner;