import React, { useEffect, useState, createContext, useContext } from "react";
import Summary from "./Summary/Summary";
import { getCartData } from "../../Utility/locoalStorage";
import Table from "./Table/Table.jsx";

export const CartContext = createContext(null);

const Cart = () => {
  const [items, setItems] = useState([]);
  const [itemTotal, setItemTotal] = useState({});
  useEffect(() => {
    const allCartDataAsStr = getCartData();
    let allCartData = allCartDataAsStr.map((str) => parseInt(str.id));
    const fetchData = async () => {
      try {
        const response = await fetch("/arrival-items.json");
        const data = await response.json();
        if (data.length > 0) {
          const cartData = data.filter((item) => allCartData.includes(item.id));
          setItems(cartData);
        }
      } catch (err) {
        console.log("Can not fatch data", err);
      }
    };
    fetchData();
  }, []);
  // Calculate total Purchase
  const itemTotalPrice = (itemId, total) => {
    
    setItemTotal((prev) => {
      if (prev[itemId] === total) {
        return prev;
      }
      const newTotals = {...prev, [itemId] : total};
      return newTotals;
    });
  };
  

  // সব আইটেমের গ্র্যান্ড টোটাল
  const ItemsTotal = Object.values(itemTotal).reduce((sum, price) => sum + price, 0);
  // console.log("Grand Total:", grandTotal);

  return (
    <div className="cart-area">
      <div className="section-container section-gap">
        <div className="section-wrapper flex gap-x-3">
          <CartContext.Provider value={{itemTotalPrice, ItemsTotal}}>
            <Summary></Summary>
            <Table
              items={items}
            ></Table>
          </CartContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Cart;
