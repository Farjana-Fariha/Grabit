import React from 'react';
import Banner from '../Components/Layouts/Banner/Banner';
import Deal from '../Components/Layouts/Deal/Deal';
import Categories from '../Components/Layouts/Categories/Categories';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <Categories></Categories>
         <Deal></Deal>

      </div>
   );
};

export default Home;