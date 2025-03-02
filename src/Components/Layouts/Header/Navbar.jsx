import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ order }) => {
  return (
    <div className="">
      <nav>
        <ul className="lg:flex md:hidden hidden gap-x-10 capitalize ">
          <li>
            <NavLink className=" leading-4 tracking-wider t-hue-dark text-[15px] font-medium">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className=" leading-4 tracking-wider t-hue-dark text-[15px] font-medium">
              categories
            </NavLink>
          </li>
          <li>
            <NavLink className=" leading-4 tracking-wider t-hue-dark text-[15px] font-medium">
              products
            </NavLink>
          </li>
          <li>
            <NavLink className=" leading-4 tracking-wider t-hue-dark text-[15px] font-medium">
              blogs
            </NavLink>
          </li>
          <li>
            <NavLink className=" leading-4 tracking-wider t-hue-dark text-[15px] font-medium">
              pages
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
