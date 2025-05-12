const Tags = ({ tags }) => {
//   console.log(tags);
  return (
    <div className="bg-[#F8F8FB] p-4 rounded-md mt-3">
      <h4 className="font-semibold text-[17px] leading-[1.2] t-hue-dark pr-[260px]">
        Tags
      </h4>
      <hr className="text-[#EEEEEE] my-[12px]" />
      <div className="mt-3">
        {tags &&
          tags.map((tag, index) => (
            <p
              key={index}
              className="font-light text-[13px] leading-[1.5] text-white py-1 px-2 primary-bg inline-block rounded-md mx-1 capitalize"
            >
              {tag}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Tags;
