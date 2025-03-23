import React from 'react';
import badge from '../../../assets/Footer/footer-badges.png'

const FooterBottom = () => {
   return (
      <div className='section-container flex md:flex-row flex-col gap-y-3 text-center justify-between  py-[17px] items-center'>
         <div className="copywrite text-[13px] t-hue-base font-light tracking-[1px] leading-[1.5] capitalize">copywrite &copy; <span className='primary-color'>Grabit</span> all rights reserved. Powered by Grabit.</div>
         <div className="badges">
         <img src={badge} alt="badge" />
         </div>
      </div>
   );
};

export default FooterBottom;