import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Layouts/Header/Header';
import BottomNav from './Components/Layouts/BottomNav/BottomNav';
import Footer from './SharedComponent/Footer/Footer';

const Root = () => {
   return (
      <div className=' leading-[1.5]'>
         <Header></Header>
         <Outlet></Outlet>
         {/* <BottomNav></BottomNav> */}
         <Footer></Footer>
      </div>
   );
};

export default Root;