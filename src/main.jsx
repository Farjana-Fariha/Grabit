import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Root></Root>}>
      <Route path="/" element={<Home></Home>}></Route>
     </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
