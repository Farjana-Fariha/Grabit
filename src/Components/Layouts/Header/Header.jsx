import React from 'react';
import HeaderMid from './HeaderMid';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const Header = () => {
   return (
         <header className=''>
            <HeaderTop></HeaderTop>
            <HeaderMid></HeaderMid>
            <HeaderBottom></HeaderBottom>
         </header>
   );
};

export default Header;