import React, { useEffect, useState } from "react";
import SectionTitle from "../../Common/SectionTitle";
import ItemCard from "../../Common/ItemCard";
import Item1 from "../../../assets/Items/item1.jpg";

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
    <div className="section-container section-gap">
      <SectionTitle></SectionTitle>
      {/* showing Items */}

      <div className="deal-items-container grid justify-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-[25px]">
        {items.map((item) => (
          <ItemCard itemData={items}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default Deal;
