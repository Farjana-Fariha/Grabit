import React from "react";
import { Link } from "react-router-dom";

const CommonBtn = () => {
  return (
    <Link
      className=" leading-[1.5] text-[clamp(12px,2vw,14px)] text-white primary-bg font-medium px-[clamp(3px,2vw,10px)] py-[clamp(4px,2vw,6px)] rounded-md "
    >
      Shop Now
    </Link>
  );
};

export default CommonBtn;




