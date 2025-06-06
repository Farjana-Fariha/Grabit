// import React from "react";
import BannerImg from "../../../assets/Banner.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import './Banner.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  const bgImg = BannerImg;
  return (
    <section
      className="section-container mt-[50px] max-w-full bg-cover bg-center bg-no-repeat rounded-sm"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* Banner content */}
          <div className=" pl-[clamp(10px,2vw,100px)] py-[clamp(70px,10vw,180px)] lg:max-w-[450px] md:max-w-[300px] max-w-[160px]">
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
              <MdKeyboardDoubleArrowRight className="text-[clamp(6px,3vw,18px)]" />
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* Banner content */}
          <div className=" pl-[clamp(10px,2vw,100px)] py-[clamp(70px,10vw,180px)] lg:max-w-[450px] md:max-w-[300px] max-w-[160px]">
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
        </SwiperSlide>
        <SwiperSlide>
          {/* Banner content */}
          <div className=" pl-[clamp(10px,2vw,100px)] py-[clamp(70px,10vw,180px)] lg:max-w-[450px] md:max-w-[300px] max-w-[160px]">
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
        </SwiperSlide>
      </Swiper>

      {/* Banner content */}
      {/* <div
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
      </div> */}
    </section>
  );
};

export default Banner;
