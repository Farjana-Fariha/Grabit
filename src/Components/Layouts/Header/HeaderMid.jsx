import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import searchIcon from "../../../assets/Nav-icons/search.svg";
import Icon1 from "../../../assets/Nav-icons/Icon1.svg";
import Icon2 from "../../../assets/Nav-icons/Icon2.svg";
import Icon3 from "../../../assets/Nav-icons/Icon3.svg";
import BurgerMenu from "./BurgerMenu";
import {  useContext } from "react";
import { AllDataContext } from "../../../Root";

const HeaderMid = () => {
    const {cartQuantity} = useContext(AllDataContext)
 
  
  return (
    <div className="section-container flex items-center justify-between lg:py-7 md:py-3 py-1">
      {/* Logo */}
      <Link to={'/'} className="xl:max-w-36 lg:max-w-32 md:max-w-28 max-w-20">
        <img className=" w-full h-full" src={Logo} alt="logo" />
      </Link>
      {/* Searchbar */}
      <div className="relative w-full xl:max-w-[640px] lg:max-w-[460px] md:max-w-[440px] max-w-[200px] ms-2">
        <input
          type="text"
          placeholder="Search Products..."
          className=" grow w-full md:p-4 p-3 md:pr-10 pr-10 shadow-xs border border-[#EEEEEE] rounded text-[clamp(10px,2vw,13px)] font-semibold tracking-[0.6px] focus:outline-none focus:ring-1 focus:ring-blue-400 "
        />
        <button className="absolute right-4 md:top-5 top-3">
          <img src={searchIcon} alt="search" />
        </button>
      </div>
      {/* Nav menu Icon  */}
      <BurgerMenu></BurgerMenu>
      {/* Account,wisthlist, cart */}
      <div className="lg:flex hidden items-center lg:gap-x-5 md:gap-x-3 gap-x-2 capitalize">
        <NavLink className="flex items-center gap-x-[10px] ">
          <img className="md:w-6 w-4" src={Icon1} alt="icon" />
          <span className="">
            <p className=" text-xs t-hue-base font-medium tracking-widest leading-4">
              Account
            </p>
            <p className=" text-[clamp(8px,2vw,13px)] t-hue-dark font-semibold tracking-[0.32px] leading-5">
              login
            </p>
          </span>
        </NavLink>
        <NavLink className="flex items-center gap-x-[10px] ">
          <img className="md:w-6 w-4" src={Icon2} alt="icon" />
          <span className="">
            <p className=" text-xs t-hue-base font-medium tracking-widest leading-4">
              Wishlist
            </p>
            <p className=" text-[clamp(8px,2vw,13px)] t-hue-dark font-semibold tracking-[0.32px] leading-5">
              <span className=" font-bold">3</span>-Items
            </p>
          </span>
        </NavLink>
        <NavLink to={'/cart'} className="flex items-center gap-x-[10px] ">
          <img className="md:w-6 w-4" src={Icon3} alt="icon" />
          <span className="">
            <p className=" text-xs t-hue-base font-medium tracking-widest leading-4">
              Cart
            </p>
            <p className=" text-[clamp(8px,2vw,13px)] t-hue-dark font-semibold tracking-[0.32px] leading-5">
              <span className=" font-bold">{cartQuantity}</span>-Items
            </p>
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default HeaderMid;
