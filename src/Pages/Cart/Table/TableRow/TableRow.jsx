import React, { useState, useContext, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import Cart_quantity from "./Cart_quantity/Cart_quantity.jsx";
import {CartContext} from '../../Cart.jsx'


const TableRow = ({item}) => {
  const [quantity, setQuantity] = useState(1)
  const {itemTotalPrice} = useContext(CartContext)
  const totalQuantity = (quantity) => setQuantity(quantity);
  const totalItemPrice = item.current_price * quantity;
  useEffect(()=>{
    itemTotalPrice(item.id,totalItemPrice)
  },[totalItemPrice, item.id, itemTotalPrice])  
   return (
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
              <Cart_quantity item={item} totalQuantity={totalQuantity}></Cart_quantity>
              </td>
              <td className=" font-medium text-[15px] leading-[1.5] t-hue-dark tracking-[0.32px] p-3">
                $<span>{totalItemPrice}</span>
              </td>
              <td className="  t-hue-dark p-3">
                <RiDeleteBin6Line></RiDeleteBin6Line>
              </td>
            </tr>
   );
};

export default TableRow;