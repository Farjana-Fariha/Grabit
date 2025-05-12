import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Ratings from "./Ratings";

const ItemCard = ({ itemData }) => {
  const {
    id,
    img,
    category,
    item_name,
    rating,
    previous_price,
    current_price,
    
  } = itemData;

  return (
    <Link to={`/product-page/${id}`}>
      <div className="lg:max-w-[298px] md:max-w-[274px] max-w-[224px] border border-[#EEEEEE] rounded-md">
        <div className="w-full flex justify-center items-center">
          <img className="w-full block" src={`/${img}`} alt="Items-img" />
        </div>
        {/* items content */}
        <div className="border border-[#EEEEEE] p-[clamp(10px,2vw,20px)] space-y-[clamp(6px,1vw,10.5px)]">
          <h4 className="t-hue-light text-[clamp(12px,2vw,13px)] font-normal leading-[1.2] tracking-[0.16px]">
            {category}
          </h4>
          <p className="t-hue-dark text-[clamp(14px,2vw,14px)] font-normal leading-[1.2] tracking-[0.16px]">
            {item_name}
          </p>
         <Ratings rating={rating}></Ratings>
          <p className="t-hue-dark text-[clamp(14px,2vw,14px)] font-bold leading-[1.5] tracking-[0.32px]">
            ${current_price}
            <del className="t-hue-base font-normal ps-[6.64px]">
              ${previous_price}
            </del>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
