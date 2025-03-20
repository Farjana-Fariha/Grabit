import React from "react";
import BannerImg from "../../../assets/Banner.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
  const bgImg = BannerImg;
  return (
    <section className="section-container section-gap max-w-full  bg-cover bg-center bg-no-repeat rounded-sm" style={{ backgroundImage: `url(${bgImg})` }}>
      {/* Banner content */}
      <div
        className=" pl-[clamp(10px,2vw,100px)] py-[clamp(70px,10vw,180px)] lg:max-w-[450px] md:max-w-[300px] max-w-[160px]"
        
      >
        <p className=" leading-[1] tracking-[0.8px] text-[clamp(6px,3vw,20px)] primary-color font-medium">
          Starting at <span className=" font-bold"> $ 29.99</span>
        </p>
        <h2 className="capitalize leading-[1.23] text-[clamp(14px,5vw,55px)] t-hue-dark font-bold pt-[clamp(16px,2vw,22px) pb-[clamp(20px,2vw,40px)]">
          Explore fresh & juicy fruits
        </h2>
        <button
          className=" leading-[1.4] text-[clamp(6px,3vw,15px)] text-white bg-[#4B5966] font-medium flex gap-x-1
             items-center px-[clamp(8px,2vw,14px)] py-[clamp(5px,1vw,11px)] rounded-md "
        >
          Shop Now{" "}
          <MdKeyboardDoubleArrowRight className="text-[clamp(6px,3vw,18px)]" />{" "}
        </button>
      </div>
    </section>
  );
};

export default Banner;
