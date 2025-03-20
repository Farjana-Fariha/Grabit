import React from 'react';
import Banner from '../Components/Layouts/Banner/Banner';
import Deal from '../Components/Layouts/Deal/Deal';
import Categories from '../Components/Layouts/Categories/Categories';
import Discount from '../Components/Layouts/Discount/Discount';
import NewArrival from '../Components/Layouts/NewArrival/NewArrival';
import TasteHealthBanner from '../Components/Layouts/TasteHealthBanner/TasteHealthBanner';
import FreeShipping from '../Components/Layouts/FreeShipping/FreeShipping';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Categories></Categories>
         <Deal></Deal>
         <Discount></Discount>
         <NewArrival></NewArrival>
         <TasteHealthBanner></TasteHealthBanner>
         <FreeShipping></FreeShipping>
      </div>
   );
};

export default Home;