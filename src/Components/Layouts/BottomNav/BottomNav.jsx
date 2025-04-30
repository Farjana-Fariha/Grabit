import React from "react";
import { NavLink } from "react-router-dom";
import Icon1 from "../../../assets/Nav-icons/Icon1.svg";
import Icon2 from "../../../assets/Nav-icons/Icon2.svg";
import Icon3 from "../../../assets/Nav-icons/Icon3.svg";
import { SlHome } from "react-icons/sl";
const BottomNav = () => {
  return (
    <div className="w-full lg:hidden flex justify-center fixed bottom-0">
      <div className="flex items-center justify-center md:gap-x-15 gap-x-8  absolute bottom-0 w-full h-[100px] bg-amber-300 capitalize">
      <NavLink to={'/'} className="flex flex-col items-center justify-center text-center gap-[10px]">
         <SlHome className=" md:text-[23px] text-[18px] text-[#414b55] "></SlHome>
          <span className=" ">
            <p className=" text-xs t-hue-base font-medium tracking-widest leading-4">
              Home
            </p>
          </span>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-[10px] ">
          <img className="md:w-6 w-4" src={Icon1} alt="icon" />
          <span className="">
            <p className=" text-xs t-hue-base font-medium tracking-widest leading-4">
              Account
            </p>
          </span>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-[10px]">
          <img className="md:w-6 w-4" src={Icon2} alt="icon" />
          <span className="">
            <p className=" text-xs t-hue-base font-medium tracking-widest leading-4">
              Wishlist
            </p>
          </span>
        </NavLink>
        <NavLink className="flex flex-col items-center gap-[10px]">
          <img className=" md:w-6 w-4" src={Icon3} alt="icon" />
          <span className="">
            <p className=" text-xs t-hue-base font-medium tracking-widest leading-4">
              cart
            </p>
          </span>
        </NavLink>

      </div>
    </div>
  );
};

export default BottomNav;
