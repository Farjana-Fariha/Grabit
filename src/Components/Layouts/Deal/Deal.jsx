import React, { useEffect, useState } from "react";
import SectionTitle from "../../Common/SectionTitle";
import ItemCard from "../../Common/ItemCard";
import Item1 from "../../../assets/Items/item1.jpg";
import DealTimer from "../DealTimer/DealTimer";

const Deal = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/itemData.json");
      const data = await response.json();
      setItems(data);
    };
    fetchData();
  }, []);
  return (
    <section className="deal-area">
      <div className="section-container section-gap">
        <div className="title-wrapper flex justify-between">
        <SectionTitle titleSuffix= {'day of the'} titlePrefix={'deal'} subtitle={"Don`t wait. The time will never be just right."}></SectionTitle>

          <DealTimer></DealTimer>
        </div>
        {/* showing Items */}
        <div className="deal-items-container grid justify-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-[24px]">
          {items.map((item) => (
            <ItemCard key={item.id} itemData={items}></ItemCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deal;
