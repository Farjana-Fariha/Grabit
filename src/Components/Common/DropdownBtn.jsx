import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CategoriesIcon from '../../assets/Nav-icons/categories.svg'

const DropdownBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <button className="w-full max-w-[200px]  primary-bg rounded-md flex items-center gap-x-2 text-white 
       lg:px-4 md:px-3 px-2 lg:py-[14px] md:py-[12px] py-[3px] cursor-pointer" onClick={toggleIsOpen}>
        {/* <span> */}
        <img className=" w-[clamp(15px,2vw,18px)] h-[clamp(15px,2vw,18px)]" src={CategoriesIcon} alt="icon" />
        <span className=" w-full h-full text-[clamp(10px,2vw,15px)] tracking-wider leading-[clamp(20px,2vw,22.5px)] capitalize">all categories</span>
        {/* </span> */}
         <IoIosArrowDown className="text-[24px] ms-auto ps-1" />
      </button>
      {isOpen && (
        <ul className=" absolute md:min-w-50 min-w-35  capitalize border border-gray-200 rounded-md bg-white cursor-pointer">
          <li className=" text-center md:py-3 py-1 text-[clamp(12px,2vw,15px)] tracking-wider leading-[22px] hover:bg-gray-100 ">category 1</li>
          <li className=" text-center md:py-3 py-1 text-[clamp(12px,2vw,15px)] tracking-wider leading-[22px] hover:bg-gray-100 ">category 2</li>
          <li className=" text-center md:py-3 py-1 text-[clamp(12px,2vw,15px)] tracking-wider leading-[22px] hover:bg-gray-100 ">category 3</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownBtn;
