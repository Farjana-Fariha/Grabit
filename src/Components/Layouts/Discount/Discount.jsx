import React from "react";
import BackgroundImg from "../../../assets/Discount-bg.png";
import CommonBtn from "../../Common/Button/CommonBtn";

const Discount = () => {
  const bgImg = BackgroundImg;
  return (
    <section className="discount-area">
      <div className="section-container section-gap">
      <div
        className=" max-w-full  bg-cover bg-center bg-no-repeat rounded-sm flex flex-col items-end lg:py-20 md:py-10 py-5"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="discount-content  lg:max-w-[425px] md:max-w-[374px] max-w-[190px] text-end xl:mr-[90px] lg:mr-[40px] md:mr-[20px] mr-[10px]">
          <h2 className=" font-bold text-[clamp(20px,5vw,50px)] t-hue-dark leading-[1.3] tracking-[0.16px]">
            Fresh Fruits Healthy Products
          </h2>
          <h3 className=" font-normal text-[clamp(16px,2vw,28px)] t-hue-base leading-[1.21] tracking-[0.32px]
          xl:pt-[16px] xl:pb-[35px] lg:pt-[8px] lg:pb-[30px] md:pt-[6px] md:pb-[25px] pt-[6px] pb-[15px]">
            
            <span className=" primary-color font-bold ">30% off sale</span> Hurry up!!!
          </h3>
          <CommonBtn></CommonBtn>
        </div>
      </div>
      </div>
    
    </section>
  );
};

export default Discount;




