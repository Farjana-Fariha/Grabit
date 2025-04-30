import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Cart from "./Pages/Cart/Cart";
// import Cart from "./Pages/Cart/Cart";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Root></Root>}>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/product-page/:id" element={<ProductPage></ProductPage>}></Route>
      <Route path="/cart" element={<Cart></Cart> }></Route>
      
     </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
