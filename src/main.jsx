import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Cart from "./Pages/Cart/Cart";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Root></Root>}>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/product-page/:id" element={<ProductPage></ProductPage>}></Route>
      <Route path="/cart" element={<Cart></Cart> }></Route> 
      <Route path="/category/:category-name" element={<CategoryPage></CategoryPage>}></Route> 
     </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
