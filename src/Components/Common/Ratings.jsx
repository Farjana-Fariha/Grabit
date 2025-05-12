import { FaStar } from "react-icons/fa";


const Ratings = ({rating, size=3}) => {
   return (
   <>
           <ul className="flex gap-x-1">
                   {rating ? (
                     [...Array(5)].map((_, index) => {
                       const ratingValue =rating;
                       return (
                         <li key={index}>
                           <FaStar
                             className={`w-${size} ${
                               index < Math.floor(ratingValue)
                                 ? "text-[#F27D0C]"
                                 : index < ratingValue
                                 ? "text-[#F27D0C] opacity-50"
                                 : "text-gray-300"
                             }`}
                           />
                         </li>
                       );
                     })
                   ) : (
                     <p>No rating available</p>
                   )}
                 </ul>
   </>
   );
};

export default Ratings;