const Range = () => {
  return (
    <div className='bg-[#F8F8FB] p-4 rounded-md mt-3'>
      <h4 className="font-semibold text-[17px] leading-[1.2] t-hue-dark pr-[260px]">
        Price
      </h4>
         <hr className='text-[#EEEEEE] mt-[12px]'/>

      <div className="flex items-center gap-2 ">
        <input
          className="w-[80px] p-[10px] font-normal text-[14px] leading-[1.5] t-hue-base border border-[#EEEEEE] rounded-md bg-white mt-[10px]"
          placeholder='Max'
          type="number"
        />
        <span className="font-normal text-[40px]  t-hue-light">-</span>
             <input
          className="w-[80px] p-[10px] font-normal text-[14px] leading-[1.5] t-hue-base border border-[#EEEEEE] rounded-md bg-white mt-[10px]"
          placeholder='Min'
          type="number"
        />
      </div>
    </div>
  );
};

export default Range;
