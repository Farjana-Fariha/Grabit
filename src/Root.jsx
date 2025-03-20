import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Layouts/Header/Header';
import BottomNav from './Components/Layouts/BottomNav/BottomNav';

const Root = () => {
   return (
      <div className=' leading-[1.5]'>
         <Header></Header>
         <Outlet></Outlet>
         {/* <BottomNav></BottomNav> */}
      </div>
   );
};

export default Root;