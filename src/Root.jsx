import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Layouts/Header/Header";
import Footer from "./SharedComponent/Footer/Footer";

// Creating Context
export const CartDataContext = createContext(null);

const Root = () => {
  let getCartId = (id) => {
    console.log("from root", id);
  };
  return (
    <div className=" leading-[1.5]">
      <CartDataContext.Provider value={{ getCartId }}>
        <Header></Header>
        <Outlet></Outlet>
        {/* <BottomNav></BottomNav> */}
        <Footer></Footer>
      </CartDataContext.Provider>
    </div>
  );
};

export default Root;
