import React, { useEffect, useState } from "react";
import ProductPageTab from "./ProductPageTab/ProductPageTab";
import AddToCart from "./AddToCart/AddToCart";

import { FaStar } from "react-icons/fa";

import Img from "../../assets/use.png";
import optionImg_1 from "../../assets/use.png";
import optionImg_2 from "../../assets/item1.png";
import optionImg_3 from "../../assets/item2.png";
import optionImg_4 from "../../assets/item4.png";
import { useParams } from "react-router-dom";
import WeightBtn from "./WeightBtn/WeightBtn";

const ProductPage = () => {
  const [currentImg, setCurrentImg] = useState(Img);
  // get spacific data
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/arrival-items.json");
        const data = await response.json();
        const item = data.find((item) => item.id == id);
        setItem(item);
      } catch (err) {
        console.log("Can not fatch data", err);
      }
    };
    fetchData();
  }, [id]);

  // Function to update the image
  const showOptionImg = (img) => {
    setCurrentImg(img);
  };
  // Function for weight
  // ওজন নির্বাচনের ফাংশন
  const weightBtn = (weight) => {
    setSelectedWeight(weight);
    console.log("Selected weight:", weight); // ডিবাগিং
  };
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
                {item.item_name}
              </p>
              <div className="ratings pt-[20px] pb-[33px] flex items-center">
                <ul className="flex gap-x-1">
                  {item.rating ? (
                    [...Array(5)].map((_, index) => {
                      const ratingValue = item.rating;
                      return (
                        <li key={index}>
                          <FaStar
                            className={`w-3 ${
                              index < Math.floor(ratingValue)
                                ? "text-[#F27D0C]"
                                : index < ratingValue
                                ? "text-[#F27D0C] opacity-50"
                                : "text-gray-300"
                            }`}
                          />
                        </li>
                      );
                    })
                  ) : (
                    <p>No rating available</p>
                  )}
                  {/* <li>
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
                  </li> */}
                </ul>

                <p className="font-normal text-[14px] t-hue-light leading-[1.42] tracking-[0.32px]">
                  <span className="text-[18px] pl-4">|</span>{" "}
                  <span>{item.rating}</span> Ratings
                </p>
              </div>
              <div className="price flex justify-between">
                <div className="wrapp flex items-center gap-[15px]">
                  <p className=" font-semibold text-[22px] t-hue-dark leading-[1.45] ">
                    $<span>{item.current_price}</span>{" "}
                  </p>
                  <p className=" font-semibold text-[18px] primary-color leading-[1.45] tracking-[0.32px]">
                    -{item.discount}
                  </p>
                </div>
                <p className=" font-semibold text-[18px] t-hue-dark leading-[1.7] tracking-[0.32px]">
                  SKU#: WH12
                </p>
              </div>
              <div className="flex justify-between pt-[17px] pb-[34px]">
                <p className=" font-normal text-[16px] t-hue-light leading-[1.5] ">
                  M.R.P. : <del>${item.previous_price}</del>
                </p>
                <p className=" font-normal text-[16px] primary-color leading-[1] capitalize">
                  {item.stock}
                </p>
              </div>
              <div className="product-text ">
                <p className="font-normal text-[14px] t-hue-base leading-[1.85] pb-[15px]">
                  {item.description}
                </p>
                <ul className=" space-y-[11px] pl-8 list-disc">
                  <li className="font-normal text-[14px] t-hue-base leading-[1.5] tracking-[0.32px] capitalize">
                    {" "}
                    <span className=" font-semibold ">Closure</span> : Hook &
                    Loop
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
              <WeightBtn btns={item.weight}></WeightBtn>

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
