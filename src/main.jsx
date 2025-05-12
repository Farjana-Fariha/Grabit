import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Cart from "./Pages/Cart/Cart";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Root from "./Root";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root></Root>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/product-page/:id"
            element={<ProductPage></ProductPage>}
          ></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route
            path="/category/:category-name"
            element={<CategoryPage></CategoryPage>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
