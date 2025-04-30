import React from "react";
import EstimateDropdown from "./EstimateDropdown/EstimateDropdown";
import CountryDropdown from "./CountryDropdown/CountryDropdown";
import ProvinceDropdown from "./ProvinceDropdown/ProvinceDropdown";
import ZipCode from "./ZipCode/ZipCode";
import TotalPrice from "./TotalPrice/TotalPrice";

const Summary = () => {
  
  return (
    <aside className=" p-4 bg-[#F8F8FB] border border-[#EEEEEE] rounded-md drop-shadow-md basis-[528px]">
      <h4 className=" font-bold text-[20px] leading-[1.2] t-hue-dark pb-[10px]">
        Summary
      </h4>
      <EstimateDropdown></EstimateDropdown>
      <p className=" font-light text-[14px] leading-[2] t-hue-base py-[10px] pr-[156px]">Enter your destination to get a shipping estimate</p>
      <CountryDropdown></CountryDropdown>
      <ProvinceDropdown></ProvinceDropdown>
      <ZipCode></ZipCode>
      <TotalPrice></TotalPrice>
    </aside>
  );
};

export default Summary;
