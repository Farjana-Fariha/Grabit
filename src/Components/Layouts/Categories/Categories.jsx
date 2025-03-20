import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

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
      {
         categories.map((category) => <Category></Category>)
      }
   </section>
  );
};

export default Categories;
