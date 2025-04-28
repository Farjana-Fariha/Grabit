import React, { useState } from 'react';

const WeightBtn = ({btns}) => {
     const [selectedWeight, setSelectedWeight] = useState(null)
   

     // Function for select weight
  const weightBtn = (weight) => {
   setSelectedWeight(weight);
   // console.log("Selected weight:", weight);
 };
   return (
      <div className="product-weight">
      <p className="font-medium  text-[15px] text-[#202020] leading-[1] tracking-[0.64px] pt-[30px] pb-[10px]">
        Weight
      </p>
      <div className="weight-btns flex gap-x-[10px]">
      {btns && Array.isArray(btns) ? (
          btns.map((btn, index) => (
            <button
              key={index}
              onClick={() => weightBtn(btn)}
              className={`font-normal text-[12px] text-[#777777] border border-[#EEEEEE] leading-[1.83] tracking-[0.32px] px-[12px] rounded ${
                selectedWeight === btn
                  ? "bg-[#5CAF90] text-white"
                  : "bg-[#F8F8FB]"
              } hover:bg-[#5CAF90] hover:text-white`}
            >
              {btn}
            </button>
          ))
        ) : (
          <p>No weights available</p>
        )}
      </div>
    </div>
   );
};

export default WeightBtn;