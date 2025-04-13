import React, { useState } from "react";
import Img from "../../assets/use.png";
import optionImg_1 from "../../assets/use.png";
import optionImg_2 from "../../assets/item1.png";
import optionImg_3 from "../../assets/item2.png";
import optionImg_4 from "../../assets/item4.png";

const ProductPage = () => {
  const [currentImg, setCurrentImg] = useState(Img);

  // Function to update the image
  const showOptionImg = (img) => {
    setCurrentImg(img);
  };
  return (
    <section className="product-area">
      <div className="section-container section-gap">
        <div className="section-wrapper flex ">
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
   
              <li>
                <img
                  onClick={() => showOptionImg(optionImg_1)}
                  className=" w-[168px] border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                  src={optionImg_1}
                  alt="option_img"
                />
              </li>
              <li>
                <img
                  onClick={() => showOptionImg(optionImg_2)}
                  className=" w-[168px] border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                  src={optionImg_2}
                  alt="option_img"
                />
              </li>
              <li>
                <img
                  onClick={() => showOptionImg(optionImg_3)}
                  className=" w-[168px] border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                  src={optionImg_3}
                  alt="option_img"
                />
              </li>
              <li>
                <img
                  onClick={() => showOptionImg(optionImg_4)}
                  className=" w-[168px] border border-[#5caf9100] hover:border-[#5CAF90] rounded-md"
                  src={optionImg_4}
                  alt="option_img"
                />
              </li>
            </ul>
          </div>
          <div className="product-desc"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
