import React, { useEffect, useState } from "react";
import Summary from "./Summary/Summary";
import Table from "./Table/Table";
import { getCartData } from "../../Utility/locoalStorage";

const Cart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const allCartDataAsStr = getCartData();
    let allCartData = allCartDataAsStr.map(str => parseInt(str.id));
    const fetchData = async () => {
      try {
        const response = await fetch("/arrival-items.json");
        const data = await response.json();
         if(data.length > 0){
            const cartData = data.filter(item => allCartData.includes(item.id));
            setItems(cartData);
         }
      } catch (err) {
        console.log("Can not fatch data", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="cart-area">
      <div className="section-container section-gap">
        <div className="section-wrapper flex gap-x-3">
          <Summary></Summary>
          <Table items={items}></Table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
