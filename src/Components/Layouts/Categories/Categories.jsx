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
  console.log(categories);
  return (
   <div className="section-container section-gap flex flex-wrap gap-x-5 ">
      {
         categories.map((category) => <Category></Category>)
      }
   </div>
  );
};

export default Categories;
