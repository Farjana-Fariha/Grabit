import {useContext, useEffect} from 'react';
import { AllDataContext } from '../../../../Root';

const SidebarCategory = ({categoryName}) => {

   const {categories} = useContext(AllDataContext);
   const currentCategory = categories.find(category =>  category.category == categoryName)
   return (
      <div className=' bg-[#F8F8FB] p-4 rounded-md '>
         <h4 className="font-semibold text-[17px] leading-[1.2] t-hue-dark  ">Category</h4>
         <hr className='text-[#EEEEEE] mt-[12px]'/>
               {
                 currentCategory && (currentCategory.subCategory.map((subCategory, index) => (
                     <div key={index} className='flex gap-3 py-[12px]'>
                     <input  type="checkbox"  className="checkbox w-[18px] h-[18px]" />
                     <p className='font-normal text-[14px] leading-[1.4] t-hue-base capitalize'>{subCategory}</p>
                     </div>
                  )))
               }
    
      </div>
   );
};

export default SidebarCategory;