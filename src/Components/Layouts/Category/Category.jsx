const Category = ({ data }) => {
  const {icon, category, quantity, tag} = data

  return (
    <div className="bg-[#E2FDE2] bg-gradient-to-t from-white via-white/100 to-transparent rounded-md p-[15px]">
      <div className="xl:w-[216px] lg:w-[190px] w-[160px] flex flex-col items-center bg-white xl:py-[25px] lg:py-[20px] md:py-[16px] py-[10px] rounded-md relative drop-shadow-sm">
        {/* corner tag */}
        <div className="absolute top-0 right-0 primary-bg rounded-tr-md rounded-bl-md">
          <p className="text-[12px] font-semibold tracking-[0.32px] text-white leading-[1.5] px-[5px]">
            {tag}
          </p>
        </div>
        {/* category Icon */}
        <div className=" w-10">
          <img src={icon} alt="icon" />
        </div>
        <h4 className="text-[15px] font-bold tracking-[0.16px] t-hue-dark leading-[1.46] pt-[10px] capitalize">
          {category}
        </h4>
        <p className="text-[13px] font-light tracking-[0.32px] t-hue-base leading-[2.153]">
          <span>{quantity}</span> Items
        </p>
      </div>
    </div>
  );
};

export default Category;
