import React, { useEffect, useState } from 'react';
import Background from '../../../assets/top-products.png'
import CommonBtn from '../../Common/Button/CommonBtn';
import TopProductColumn from './TopProductColumn/TopProductColumn';

const TopProducts = () => {
       const [items, setItems] = useState([]);
        useEffect(() => {
          const fetchData = async () => {
            const response = await fetch("/top-products.json");
            const data = await response.json();
            setItems(data);
          };
          fetchData();
        }, []);

   return (
      <section className='top-products-aria'>
         <div className="section-container">
            <div className="section-wrapper grid grid-cols-4 gap-x-6">
               <div className=" max-w-full bg-cover bg-center bg-no-repeat rounded-sm pt-[30px] pl-[30px] pr-[94px] pb-[270px] " style={{ backgroundImage: `url(${Background})` }}>
                  <p className=' font-semibold text-[22px] leading-[1.45] text-[#444444] mb-[26px] capitalize'>Our top most products
                  check it now</p>
                  <CommonBtn></CommonBtn>
               </div>
               <TopProductColumn titleSuffix={"Trending"} titlePrefix={"Items"}></TopProductColumn>
               <div className=" bg-amber-100"></div>
               <div className=" bg-amber-100"></div>
            </div>
         </div>
      </section>
   );
};

export default TopProducts;