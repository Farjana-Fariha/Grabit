import {useEffect, useState, useContext} from 'react';
import Categories from '../../Components/Layouts/Categories/Categories';
import {AllDataContext} from '../../Root.jsx';
import {useParams} from 'react-router-dom'
import ItemCard from '../../Components/Common/ItemCard.jsx'

const CategoryPage = () => {
   const { 'category-name': categoryName } = useParams(); // অবজেক্ট থেকে categoryName ডিস্ট্রাকচার করা
   const { allItems } = useContext(AllDataContext);
   const items = allItems.filter(item => item.category == categoryName); // এখন categoryName একটা স্ট্রিং
   return (
      <div className=' grid justify-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-[24px]' >
               {
                  items.length>0 && (items.map((item) => <ItemCard itemData={item} key={item.id}></ItemCard> ))
               }
      </div>
   );
};

export default CategoryPage;