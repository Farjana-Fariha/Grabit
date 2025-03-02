import React from "react";
import Item from "../../assets/Items/item1.jpg";
import { FaStar } from "react-icons/fa";

const ItemCard = ({itemData}) => {
  const [category] = itemData;
  console.log(category)

  return (
    <div className="max-w-[294px] border border-gray-100 rounded-md">
      <div className="w-full flex justify-center items-center">
        <img className="w-full block" src={Item} alt="Items-img" />
      </div>
      {/* items content */}
      <div className="border border-gray-100 p-[clamp(10px,2vw,20px)] space-y-[clamp(6px,1vw,10.5px)]">
        <h4 className="t-hue-light text-[clamp(8px,2vw,13px)] font-normal leading-[1.2] tracking-[0.16px]">
          Dried Fruits
        </h4>
        <p className="t-hue-dark text-[clamp(12px,2vw,14px)] font-normal leading-[1.2] tracking-[0.16px]">
          Mixed Nuts Berries Pack
        </p>
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
          <li>
            <FaStar className="w-3 text-[#F27D0C]"></FaStar>
          </li>
        </ul>
        <p className="t-hue-dark text-[clamp(12px,2vw,14px)] font-bold leading-[1.5] tracking-[0.32px]">
          $45.00{" "}
          <del className="t-hue-base font-normal ps-[6.64px]">$56.00</del>
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
