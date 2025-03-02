import Icon1 from "../../../assets/Nav-icons/Vector1.svg";
import Icon2 from "../../../assets/Nav-icons/Vector2.svg";
import { IoIosArrowDown } from "react-icons/io";

const HeaderTop = () => {
  return (
    <div className="bg-[#F8F8FB] ">
      <div className="section-container flex items-center md:justify-between justify-center">
        <p className="lg:flex lg:items-center lg:gap-x-5 md:hidden hidden">
          <span className="flex items-center gap-x-1 t-hue-base text-[clamp(8px,2vw,13px)] ">
            <img className="w-[13px]" src={Icon1} alt="" />
            +91 987 654 3210
          </span>
          <span className="flex items-center gap-x-1 t-hue-base text-[clamp(8px,2vw,13px)] ">
            <img className="w-[13px]" src={Icon2} alt="" />
            +91 987 654 3210
          </span>
        </p>
        <p className="md:flex md:items-center t-hue-base text-[clamp(8px,2vw,13px)]  capitalize hidden">
          World`s Fastest Online Shopping Destination
        </p>
        <p className="flex items-center gap-x-4 capitalize">
          <span className="t-hue-base text-[clamp(8px,2vw,13px)]  ">help?</span>
          <span className="t-hue-base text-[clamp(8px,2vw,13px)] ">track order?</span>
          {/*Language Dropdown */}
          <div className="relative md:w-17 w-11">
            <select className="select select-ghost w-full max-w-xs focus:outline-none t-hue-base text-[clamp(8px,2vw,13px)] capitalize">
              <option selected>English</option>
              <option>Bangla</option>
            </select>
            {/* Custom Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center">
              <IoIosArrowDown className="text-gray-500 text-[clamp(8px,2vw,13px)]" />
            </div>
          </div>
          {/*Currency Dropdown */}
          <div className="relative md:w-17 w-11">
            <select className="select select-ghost w-full max-w-xs focus:outline-none t-hue-base text-[clamp(8px,2vw,13px)] capitalize">
              <option selected>dollar</option>
              <option>taka</option>
            </select>
            {/* Custom Arrow Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center">
              <IoIosArrowDown className="text-gray-500 text-[clamp(8px,2vw,13px)]" />
            </div>
          </div>
        </p>
      </div>
    </div>
  );
};

export default HeaderTop;
