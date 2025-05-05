import React, { createContext,useState } from "react";
import { Outlet } from "react-router-dom";
import { getCartData } from "./Utility/locoalStorage.js";
import Header from "./Components/Layouts/Header/Header";
import Footer from "./SharedComponent/Footer/Footer";

// Creating Context
export const AllDataContext = createContext(null);

const Root = () => {
  const [cartQuantity, setCartQuantity] = useState(getCartData().length);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemId, setItemId] = useState(null)
  // Data to show item quantity
  let getCartQuantity = (itemId,itemQuantity) => {
    setCartQuantity(getCartData().length);
    setItemQuantity(itemQuantity);
    setItemId(itemId);

  };
  return (
    <div className=" leading-[1.5]">
      <AllDataContext.Provider value={{cartQuantity, getCartQuantity, itemQuantity, itemId}}>
        <Header></Header>
        <Outlet></Outlet>
        {/* <BottomNav></BottomNav> */}
        <Footer></Footer>
      </AllDataContext.Provider>
    </div>
  );
};

export default Root;
