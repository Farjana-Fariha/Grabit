import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';
import BlogCard from './BlogCard/BlogCard';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Blog = () => {
      const [items, setItems] = useState([]);
        useEffect(() => {
          const fetchData = async () => {
            const response = await fetch("/blog.json");
            const data = await response.json();
            setItems(data);
          };
          fetchData();
        }, []);
   return (
     <section className='blog-area'>
      <div className="section-container section-gap">
      <div className="title-wrapper flex justify-between">
        <SectionTitle titleSuffix= {'latest'} titlePrefix={'blog'} subtitle={"We tackle interesting topics every day in 2023."}></SectionTitle>
        <Link ><button className='flex gap-x-[5px] items-center t-hue-base font-normal leading-[1.5] tracking-[0.32px]'>Read More <MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight> </button></Link>
        </div>
       {/* All Blogs */}
       <div className=" grid justify-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 xl:gap-[24px] lg:gap-[8px] md:gap-[16px]">
                   {items.map((item) => (
                     <BlogCard key={item.id} itemData={item}></BlogCard>
                   ))}
                 </div>
      </div>
     </section>

   );
};

export default Blog;