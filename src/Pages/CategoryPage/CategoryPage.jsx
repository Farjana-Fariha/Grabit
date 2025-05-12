import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../../Components/Common/ItemCard.jsx";
import { AllDataContext } from "../../Root.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

const CategoryPage = () => {
  const [tags, setTags] = useState([])
  const { "category-name": categoryName } = useParams();
  const { allItems } = useContext(AllDataContext);
  const items = allItems.filter((item) => item.category == categoryName);
useEffect(() => {
  if (items && items.length > 0) {
    setTags((prev) => [
      ...new Set([...prev, ...items.flatMap((item) => item.tags)])
    ]);
  }
}, [items]);
//   console.log(tags)


  return (
    <section className="section-container section-gap">
      <div className='flex gap-x-6'>
         <Sidebar categoryName={categoryName}></Sidebar>
        <div className=" grid justify-center xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-[24px] h-fit">
          {items.length > 0 &&
            items.map((item) => (
              <ItemCard itemData={item} key={item.id}></ItemCard>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
