import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Layouts/Header/Header";
import Footer from "./SharedComponent/Footer/Footer";
import { getCartData } from "./Utility/locoalStorage.js";

// Creating Context
export const AllDataContext = createContext(null);

const Root = () => {
  const [cartQuantity, setCartQuantity] = useState(getCartData().length);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemId, setItemId] = useState();
  const [allItems, setAllItems] = useState([]);
  const [categories, setCategories] = useState([]);


  // Fetch all items
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/arrival-items.json");
        const data = await response.json();
        setAllItems(data);
      } catch (err) {
        console.log("Can not fatch data", err);
      }
    };
    fetchData();
  }, []);
// Fetch all categories
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/categories.json");
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, []);
  // Data to show item quantity
  let getCartQuantity = (itemId, itemQuantity) => {
    setCartQuantity(getCartData().length);
    setItemQuantity(itemQuantity);
    setItemId(itemId);
  };
  return (
    <div className=" leading-[1.5]">
      <AllDataContext.Provider
        value={{
          cartQuantity,
          getCartQuantity,
          itemQuantity,
          itemId,
          allItems,
          categories
        }}
      >
        <Header></Header>
        <Outlet></Outlet>
        {/* <BottomNav></BottomNav> */}
        <Footer></Footer>
      </AllDataContext.Provider>
    </div>
  );
};

export default Root;
