import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import ProductPage from "./Pages/ProductPage/ProductPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Root></Root>}>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/product-page/:id" element={<ProductPage></ProductPage>}></Route>
      
     </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
