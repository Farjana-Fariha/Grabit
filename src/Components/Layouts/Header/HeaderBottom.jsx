import React from "react";
import DropdownBtn from "../../Common/DropdownBtn";
import Navbar from "./Navbar";
const HeaderBottom = () => {
  return (
    <div className=" border border-y-1 border-gray-100 border-x-0 shadow-xs lg:block flex">
      <div className="section-container flex flex-row justify-between items-center py-[6px] gap-x-1">
        <DropdownBtn></DropdownBtn>
        <Navbar></Navbar>
        <DropdownBtn></DropdownBtn>
      </div>
    </div>
  );
};

export default HeaderBottom;
