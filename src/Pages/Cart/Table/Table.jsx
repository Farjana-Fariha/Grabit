

import TableRow from "./TableRow/TableRow.jsx";

const Table = ({ items}) => {

  return (
    <div className="p-3 max-w-[1067px]">
      <table className="table-fixed w-full text-left">
        <thead>
          <tr className="  border border-b-2 border-t-0 border-x-0 border-[#EEEEEE]">
            <th className=" font-medium text-[15px] leading-1 t-hue-dark capitalize p-[12px]">
              Product
            </th>
            <th className=" font-medium text-[15px] leading-1 t-hue-dark capitalize p-[12px]">
              Price
            </th>
            <th className=" font-medium text-[15px] leading-1 t-hue-dark capitalize p-[12px]">
              quantity
            </th>
            <th className=" font-medium text-[15px] leading-1 t-hue-dark capitalize p-[12px]">
              total
            </th>
            <th className=" font-medium text-[15px] leading-1 t-hue-dark capitalize p-[12px]">
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (<TableRow key={item.id} item={item}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
