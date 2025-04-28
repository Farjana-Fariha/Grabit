import React, { useState } from "react";
import ProductPageTab from "./ProductPageTab/ProductPageTab";
import AddToCart from "./AddToCart/AddToCart";

import { FaStar } from "react-icons/fa";


import Img from "../../assets/use.png";
import optionImg_1 from "../../assets/use.png";
import optionImg_2 from "../../assets/item1.png";
import optionImg_3 from "../../assets/item2.png";
import optionImg_4 from "../../assets/item4.png";

// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
// import { FreeMode, Pagination } from "swiper/modules";

const ProductPage = () => {
  const [currentImg, setCurrentImg] = useState(Img);

  // Function to update the image
  const showOptionImg = (img) => {
    setCurrentImg(img);
  };
  // Function for weight
  const weightBtn = (data) => {};
  return (
    <section className="product-area">
      <div className="section-container section-gap">
        <div className="section-wrapper">
        <div className="description-wrapper flex gap-x-[24px]">
          <div className="product-showcase p-4 border border-[#EEEEEE] rounded-md">
            <div className="">
              <img
                id="showing-img"
                className="showing-img w-full"
                src={currentImg}
                alt="product-img"
              />
            </div>
            <ul className="img-options-wrapper flex gap-[22px]">
              {/* <Swiper
                slidesPerView={4}
                spaceBetween={22}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className=" w-[168px]">
                    <img
                      onMouseOver={() => showOptionImg(optionImg_1)}
                      className=" w-full border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                      src={optionImg_1}
                      alt="option_img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-[168px]">
                    <img
                      onMouseOver={() => showOptionImg(optionImg_1)}
                      className=" w-full border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                      src={optionImg_1}
                      alt="option_img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-[168px]">
                    <img
                      onMouseOver={() => showOptionImg(optionImg_1)}
                      className=" w-full border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                      src={optionImg_1}
                      alt="option_img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" w-[168px]">
                    <img
                      onMouseOver={() => showOptionImg(optionImg_1)}
                      className=" w-full border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                      src={optionImg_1}
                      alt="option_img"
                    />
                  </div>
                </SwiperSlide>
        
              </Swiper> */}

              <li className=" w-[168px]">
                <img
                  onMouseOver={() => showOptionImg(optionImg_1)}
                  className=" w-full border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                  src={optionImg_1}
                  alt="option_img"
                />
              </li>
              <li>
                <img
                  onMouseOver={() => showOptionImg(optionImg_2)}
                  className=" w-[168px] border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                  src={optionImg_2}
                  alt="option_img"
                />
              </li>
              <li>
                <img
                  onMouseOver={() => showOptionImg(optionImg_3)}
                  className=" w-[168px] border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                  src={optionImg_3}
                  alt="option_img"
                />
              </li>
              <li>
                <img
                  onMouseOver={() => showOptionImg(optionImg_4)}
                  className=" w-[168px] border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                  src={optionImg_4}
                  alt="option_img"
                />
              </li>
            </ul>
          </div>
          <div className="product-desc pr-46">
            <p className="font-medium text-[22px] t-hue-dark leading-[1.59] tracking-[0.32px]">
              Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips &
              Snacks.
            </p>
            <div className="ratings pt-[20px] pb-[33px] flex items-center">
              <ul className="flex gap-x-1">
                <li>
                  <FaStar className="w-3 text-[#F27D0C]"></FaStar>
                </li>
                <li>
                  <FaStar className="w-3 text-[#F27D0C]"></FaStar>
                </li>
                <li>
                  <FaStar className="w-3 text-[#F27D0C]"></FaStar>
                </li>
                <li>
                  <FaStar className="w-3 text-[#F27D0C]"></FaStar>
                </li>
                <li>
                  <FaStar className="w-3 text-[#F27D0C]"></FaStar>
                </li>
              </ul>

              <p className="font-normal text-[14px] t-hue-light leading-[1.42] tracking-[0.32px]">
                <span className="text-[18px] pl-4">|</span> 992 Ratings
              </p>
            </div>
            <div className="price flex justify-between">
              <div className="wrapp flex items-center gap-[15px]">
                <p className=" font-semibold text-[22px] t-hue-dark leading-[1.45] ">
                  $<span>664.00</span>{" "}
                </p>
                <p className=" font-semibold text-[18px] primary-color leading-[1.45] tracking-[0.32px]">
                  -78%
                </p>
              </div>
              <p className=" font-semibold text-[18px] t-hue-dark leading-[1.7] tracking-[0.32px]">
                SKU#: WH12
              </p>
            </div>
            <div className="flex justify-between pt-[17px] pb-[34px]">
              <p className=" font-normal text-[16px] t-hue-light leading-[1.5] ">
                M.R.P. : <del>$2,999.00</del>
              </p>
              <p className=" font-normal text-[16px] primary-color leading-[1]">
                IN STOCK
              </p>
            </div>
            <div className="product-text ">
              <p className="font-normal text-[14px] t-hue-base leading-[1.85] pb-[15px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1990.
              </p>
              <ul className=" space-y-[11px] pl-8 list-disc">
                <li className="font-normal text-[14px] t-hue-base leading-[1.5] tracking-[0.32px] capitalize">
                  {" "}
                  <span className=" font-semibold ">Closure</span> : Hook & Loop
                </li>
                <li className="font-normal text-[14px] t-hue-base leading-[1.5] tracking-[0.32px] capitalize">
                  {" "}
                  <span className=" font-semibold capitalize">sole</span> :
                  Polyvinyl Chloride{" "}
                </li>
                <li className="font-normal text-[14px] t-hue-base leading-[1.5] tracking-[0.32px] capitalize">
                  {" "}
                  <span className=" font-semibold capitalize">width</span> :
                  Medium{" "}
                </li>
                <li className="font-normal text-[14px] t-hue-base leading-[1.5] tracking-[0.32px] capitalize">
                  {" "}
                  <span className=" font-semibold capitalize">
                    Outer Material
                  </span>{" "}
                  : A-Grade Standard Quality{" "}
                </li>
              </ul>
            </div>
            <div className="product-weight">
              <p className="font-medium  text-[15px] text-[#202020] leading-[1] tracking-[0.64px] pt-[30px] pb-[10px]">
                Weight
              </p>
              <div className="weight-btns flex gap-x-[10px]">
                <button
                  onClick={() => {
                    weightBtn("hi");
                  }}
                  className="font-normal  text-[12px] text-[#777777] border border-[#EEEEEE]  leading-[1.83] tracking-[0.32px] bg-[#F8F8FB] px-[12px] hover:bg-[#5CAF90] hover:text-white rounded"
                >
                  250g
                </button>
                <button className="font-normal  text-[12px] text-white leading-[1.83] tracking-[0.32px] primary-bg px-[12px] rounded">
                  1kg
                </button>
                <button className="font-normal  text-[12px] text-white leading-[1.83] tracking-[0.32px] primary-bg px-[12px] rounded">
                  2kg
                </button>
                <button className="font-normal  text-[12px] text-white leading-[1.83] tracking-[0.32px] primary-bg px-[12px] rounded">
                  500g
                </button>
              </div>
            </div>
            {/* Add to card area */}
         <AddToCart></AddToCart>
          </div>
        </div>
        <div className="product-page-tab mt-10">
        <ProductPageTab></ProductPageTab>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
