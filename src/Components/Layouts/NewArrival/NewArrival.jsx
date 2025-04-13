import React, { useEffect, useState } from "react";
import SectionTitle from "../../Common/SectionTitle";
import ItemCard from "../../Common/ItemCard";

const NewArrival = () => {
     const [items, setItems] = useState([]);
     useEffect(() => {
       const fetchData = async () => {
         const response = await fetch("/arrival-items.json");
         const data = await response.json();
         setItems(data);
       };
       fetchData();
     }, []);
  return (
    <section className="new-arrival-area">
      <div className="section-container section-gap">
        <div className="title-wrapper flex justify-between">
          <SectionTitle titleSuffix= {'new'} titlePrefix={'arrival'} subtitle={"Shop online for new arrivals and get free shipping!"}></SectionTitle>
        </div>
        {/* showing Items */}
        <div className="deal-items-container grid justify-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-[24px]">
          {items.map((item) => (
            <ItemCard key={item.id} itemData={item}></ItemCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
