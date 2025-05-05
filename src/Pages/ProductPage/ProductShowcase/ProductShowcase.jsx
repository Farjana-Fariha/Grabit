import React from 'react';

const ProductShowcase = ({currentImg, imgOptions, showOptionImg}) => {

   return (
     <div className="product-showcase p-4 border border-[#EEEEEE] rounded-md">
                   <div className="">
                     <img
                       id="showing-img"
                       className="showing-img w-full"
                       src={`/${currentImg}`}
                       alt="product-img"
                     />
                   </div>
                   <ul className="img-options-wrapper flex gap-[22px]">
                     {
                       (imgOptions && Array.isArray(imgOptions) ? (
                        imgOptions.map((img,index)=>(
                         <li key={index} className=" w-[168px]">
                         <img
                           onMouseOver={() => showOptionImg(img)}
                           className=" w-full border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                           src={`/${img}`}
                           alt="option_img"
                         />
                       </li>
                        ))
                       ): ( <p>Image not Available</p> ) )
                     }
                   </ul>
                 </div>
   );
};

export default ProductShowcase;