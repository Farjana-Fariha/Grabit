import {useState} from 'react';
import SidebarCategory from './SidebarCategory/SidebarCategory';
import Range from './Range';
import SidebarRatings from './SidebarRatings';
import Tags from './Tags';

const Sidebar = ({categoryName, tags}) => {

   return (
      <div className='basis-1/5'>
         <SidebarCategory categoryName={categoryName}></SidebarCategory>
         <Range></Range>
         <SidebarRatings></SidebarRatings>
         <Tags tags={tags}></Tags>
      </div>
   );
};

export default Sidebar;