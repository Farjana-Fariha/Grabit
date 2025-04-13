import React from "react";
import SectionTitle from "../../../Common/SectionTitle";

const TopProductColumn = ({titleSuffix, titlePrefix}) => {
  return (
    <div className="title-wrapper flex justify-between">
      <SectionTitle
        titleSuffix={titleSuffix}
        titlePrefix={titlePrefix}
      ></SectionTitle>

      {/* <DealTimer></DealTimer> */}
    </div>
  );
};

export default TopProductColumn;
