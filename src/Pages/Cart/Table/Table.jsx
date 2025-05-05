import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import Cart_quantity from "./Cart_quantity/Cart_quantity";

const Table = ({ items }) => {

  return (
    <div className="p-3 max-w-[1067px]">
      <table className="table-fixed w-full text-left">
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
            <tr key={item.id} className="  border border-b-2 border-t-0 border-x-0 border-[#EEEEEE]">
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
              <Cart_quantity item={item}></Cart_quantity>
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
