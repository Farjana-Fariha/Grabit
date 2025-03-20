import React from "react";
import backgroundImage1 from '../../../assets/TasteHealthBanner.png'
import backgroundImage2 from '../../../assets/TasteHealthBanner.png'
import CommonBtn from "../../Common/Button/CommonBtn";

const TasteHealthBanner = () => {
   const bgImg1 = backgroundImage1;
   const bgImg2 = backgroundImage2;
  return (
    <section className="tasteHealthBanner-area">
      <div className="section-container section-gap flex lg:flex-row flex-col xl:gap-[24px] lg:gap-[20px] gap-[24px]" >
        <div
          className="max-w-full  bg-cover bg-center bg-no-repeat rounded-sm flex flex-col items-end xl:py-[105px] lg:py-[90px] md:py-[60px] py-[40px] flex-1"
          style={{ backgroundImage: `url(${bgImg1})` }}
        >
          <div className="discount-content  xl:max-w-[228px] md:max-w-[190px]  max-w-[130px] xl:mr-[20px] md:mr-[10px] mr-[0px]">
            <h2 className=" font-bold xl:text-[34px] md:text-[30px] text-[22px] t-hue-dark leading-[1.2] tracking-[0.16px]">
            Tasty Snack
            & Fastfood
            </h2>
            <h3 className=" font-normal md:text-[16px] text-[14px] t-hue-base leading-[1.375] tracking-[0.32px] lg:pt-[7px]  lg:pb-[16px] md:pt-[5px] md:pb-[25px] pt-[4px] pb-[15px] pr-[48px]">
            The flavor of
            something special
            </h3>
            <CommonBtn></CommonBtn>
          </div>
        </div>
        <div
          className="max-w-full  bg-cover bg-center bg-no-repeat rounded-sm flex flex-col items-end xl:py-[105px] lg:py-[90px] md:py-[60px] py-[40px] flex-1"
          style={{ backgroundImage: `url(${bgImg1})` }}
        >
          <div className="discount-content  xl:max-w-[228px] md:max-w-[190px]  max-w-[130px] xl:mr-[20px] md:mr-[10px] mr-[0px]">
            <h2 className=" font-bold xl:text-[34px] md:text-[30px] text-[22px] t-hue-dark leading-[1.2] tracking-[0.16px]">
            Tasty Snack
            & Fastfood
            </h2>
            <h3 className=" font-normal md:text-[16px] text-[14px] t-hue-base leading-[1.375] tracking-[0.32px] lg:pt-[7px]  lg:pb-[16px] md:pt-[5px] md:pb-[25px] pt-[4px] pb-[15px] pr-[48px]">
            The flavor of
            something special
            </h3>
            <CommonBtn></CommonBtn>
          </div>
        </div>
 
     
      
      </div>
    </section>
  );
};

export default TasteHealthBanner;
