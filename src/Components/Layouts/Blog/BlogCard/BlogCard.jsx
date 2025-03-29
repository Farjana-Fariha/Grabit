import React from 'react';
// import img from '../../../../assets/Blog/blog-1.png'
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const BlogCard = ({itemData}) => {
   const {date, category, title, description , image} = itemData
   return (
      <div className="flex-1 mb-5">
         <div className="w-full flex justify-center items-center ">
           <img className="w-full block rounded-md" src={image} alt="Items-img" />
         </div>
         {/* items content */}
         <div className="">
           <h4 className="t-hue-light text-[clamp(12px,2vw,13px)] font-normal leading-[1.5] pt-[20px] capitalize">
             {date} - {category}
           </h4>
           <p className="t-hue-dark text-[clamp(14px,2vw,17px)] font-medium leading-[1.29] tracking-[0.16px] pt-[16px] pb-[14px] capitalize pr-8">
             {description}
           </p>
           <Link><button className='flex gap-x-[5px] items-center t-hue-dark text-[13px] font-normal leading-[1.5]'>Read More <MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight> </button></Link>
         </div>
       </div>
   );
};

export default BlogCard;