import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/categories.json");
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, []);
  return (
    <section className="section-container section-gap flex flex-wrap justify-center gap-x-5 ">
      {categories.map((category) => (
          <Category data={category}></Category>
      ))}
    </section>
  );
};

export default Categories;
