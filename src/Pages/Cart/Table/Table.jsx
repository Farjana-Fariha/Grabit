import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

const Table = ({ items }) => {
  // Handle Increament and Decreament
  let [quantity, setQuantity] = useState(
    items.reduce((acc,item)=>(
      {...acc,[item.id]:1}
    ),{})
  );
  const handleIncreament = (id) => {
    setQuantity((prev)=>(
      {
        ...prev,
      [id]: (prev[id] || 1) +1,
      }
    ));
  };
  const handledecreament = (id) => {
    if (quantity[id] > 1) {
      setQuantity((prev)=>(
        {
          ...prev,
        [id]: prev[id] - 1,
        }
      ));
    }
  };
  console.log(quantity)
  return (
    <div className="p-3 max-w-[1067px]">
      <table class="table-fixed w-full text-left">
        <thead>
          <tr className="  border border-b-2 border-t-0 border-x-0 border-[#EEEEEE]">
            <th className=" font-medium text-[15px] leading-1 t-hue-dark capitalize p-[12px]">
              Product
            </th>
            <th className=" font-medium text-[15px] leading-1 t-hue-dark capitalize p-[12px]">
              Price
            </th>
            <th className=" font-medium text-[15px] leading-1 t-hue-dark capitalize p-[12px]">
              quantity
            </th>
            <th className=" font-medium text-[15px] leading-1 t-hue-dark capitalize p-[12px]">
              total
            </th>
            <th className=" font-medium text-[15px] leading-1 t-hue-dark capitalize p-[12px]">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr className="  border border-b-2 border-t-0 border-x-0 border-[#EEEEEE]">
              <td className="flex gap-x-[15px] items-center p-3">
                <img className="max-w-[60px]" src={item.img} alt="" />
                <p className=" font-normal text-[14px] leading-[1.5] t-hue-base tracking-[0.6px] capitalize">
                  {item.item_name}
                </p>
              </td>
              <td className=" font-medium text-[15px] leading-[1.5] t-hue-dark tracking-[0.32px] p-3">
                $<span>{item.current_price}</span>
              </td>
              {/* Increament and Decreament btn  */}

              <td className=" font-medium text-[15px] leading-[1.5] t-hue-dark tracking-[0.32px] p-3">
                <div className="quantity-btn w-[84px] h-[35px] flex items-center justify-around font-medium leading-[2.4] border border-[#EEEEEE] rounded-md">
                  <div
                    onClick={()=> handleIncreament(item.id)}
                    className="increament cursor-pointer text-[#212529]"
                  >
                    <span className="font-normal text-[16px] leading-[1.5] t-hue-dark"><LuPlus></LuPlus></span>
                  </div>
                  <div className="quantity-display font-semibold text-[14px] leading-[2.7] t-hue-dark">
                    {(quantity[item.id] || 1)}
                  </div>
                  <div
                    onClick={()=> handledecreament(item.id)}
                    className="decreament flex items-center text-[#212529]"
                  >
                   <span className="font-normal text-[16px] leading-[1.5] t-hue-dark"> <LuMinus></LuMinus></span>
                  </div>
                </div>
              </td>
              <td className=" font-medium text-[15px] leading-[1.5] t-hue-dark tracking-[0.32px] p-3">
                $<span>70</span>
              </td>
              <td className="  t-hue-dark p-3">
                <RiDeleteBin6Line></RiDeleteBin6Line>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
