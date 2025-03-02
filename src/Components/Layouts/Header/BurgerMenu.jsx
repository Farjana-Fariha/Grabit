import Hamburger from "hamburger-react";
import React from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
  return (
    <div className="lg:hidden md:inline-block inline-block z-50">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* responsive menu icon */}
          <label htmlFor="my-drawer-4" className="drawer-button">
              <Hamburger size={18}></Hamburger>
          </label>
        </div>
        <div className="drawer-side md:mt-26 mt-24">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className=""
          ></label>
          <div className="menu bg-base-200 text-base-content min-h-3/4 w-70 p-4">
            {/* Sidebar content here */}
           <nav>
                <ul className="capitalize ">
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
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
