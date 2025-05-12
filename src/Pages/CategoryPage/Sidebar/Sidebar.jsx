import {useState} from 'react';
import SidebarCategory from './SidebarCategory/SidebarCategory';
import Range from './Range';
import SidebarRatings from './SidebarRatings';
import Tags from './Tags';

const Sidebar = ({categoryName}) => {
   const [tags, setTags] = useState(null)
     const tagsName = (tag) => {
      setTags(tag)
   }
   return (
      <div>
         <SidebarCategory categoryName={categoryName} tagsName={tagsName}></SidebarCategory>
         <Range></Range>
         <SidebarRatings></SidebarRatings>
         <Tags tags={tags}></Tags>
      </div>
   );
};

export default Sidebar;