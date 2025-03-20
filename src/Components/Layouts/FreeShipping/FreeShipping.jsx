import React, { useEffect, useState } from 'react';
import ShippingCard from './ShippingCard/ShippingCard';

const FreeShipping = () => {
     const [items, setItems] = useState([]);
     useEffect(() => {
       const fetchData = async () => {
         const response = await fetch("/freeShipping.json");
         const data = await response.json();
         setItems(data);
       };
       fetchData();
     }, []);
   return (
      <section className='free-shipping-area '>
              <div className="free-shipping-container section-container section-gap grid justify-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-[24px]">
                   {items.map((item) => (
                     <ShippingCard key={item.id} itemData={item}></ShippingCard>
                   ))}
                 </div>
      </section>
   );
};

export default FreeShipping;