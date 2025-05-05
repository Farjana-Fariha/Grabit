import React, { createContext,useState } from "react";
import { Outlet } from "react-router-dom";
import { getCartData } from "./Utility/locoalStorage.js";
import Header from "./Components/Layouts/Header/Header";
import Footer from "./SharedComponent/Footer/Footer";

// Creating Context
export const AllDataContext = createContext(null);

const Root = () => {
  // Data to show cart quantity
  const [cartQuantity, setCartQuantity] = useState(getCartData().length)
  let getCartQuantity = () => {
    setCartQuantity(getCartData().length)

  };
  return (
    <div className=" leading-[1.5]">
      <AllDataContext.Provider value={{cartQuantity, getCartQuantity}}>
        <Header></Header>
        <Outlet></Outlet>
        {/* <BottomNav></BottomNav> */}
        <Footer></Footer>
      </AllDataContext.Provider>
    </div>
  );
};

export default Root;
