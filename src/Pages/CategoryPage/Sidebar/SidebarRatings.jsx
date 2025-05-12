import Ratings from "../../../Components/Common/Ratings.jsx";

const SidebarRatings = () => {
  return (
    <div className="bg-[#F8F8FB] p-4 rounded-md mt-3">
      <h4 className="font-semibold text-[17px] leading-[1.2] t-hue-dark pr-[260px]">
        Ratings
      </h4>
      <hr className="text-[#EEEEEE] my-[12px]" />

      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="py-[6px]">
         <Ratings rating={5 - index} size={6} />
        </div>
      ))}

    </div>
  );
};

export default SidebarRatings;
