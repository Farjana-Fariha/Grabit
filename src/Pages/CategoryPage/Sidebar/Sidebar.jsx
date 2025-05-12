import React from 'react';
import SidebarCategory from './SidebarCategory/SidebarCategory';

const Sidebar = ({categoryName}) => {
   return (
      <div>
         <SidebarCategory categoryName={categoryName}></SidebarCategory>
      </div>
   );
};

export default Sidebar;