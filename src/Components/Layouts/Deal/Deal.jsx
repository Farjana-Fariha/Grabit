import React, { useEffect, useState } from "react";
import SectionTitle from "../../Common/SectionTitle";
import ItemCard from "../../Common/ItemCard";
import './Deal.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import DealTimer from "./DealTimer/DealTimer";

const Deal = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/deal-Items.json");
      const data = await response.json();
      setItems(data);
    };
    fetchData();
  }, []);
  return (
    <section className="deal-area">
      <div className="section-container section-gap">
        <div className="title-wrapper flex justify-between">
          <SectionTitle
            titleSuffix={"day of the"}
            titlePrefix={"deal"}
            subtitle={"Don`t wait. The time will never be just right."}
          ></SectionTitle>

          <DealTimer></DealTimer>
        </div>
        {/* showing Items */}
        <Swiper
          slidesPerView={1.7}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            425: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 5, spaceBetween: 24 }, 
          }}
          modules={[FreeMode, Pagination]}
          className="deal-items-container"
        >
            {items.map((item) => (
              <SwiperSlide>
                <ItemCard key={item.id} itemData={item}></ItemCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Deal;
