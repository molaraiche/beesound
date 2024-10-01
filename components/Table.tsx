import React from "react";

interface TableProps {
  data: { col1: string; col2: string; col3: string }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className='overflow-x-auto  text-secondary'>
      <table className='min-w-full table-auto border-collapse border border-red-500'>
        <thead>
          <tr>
            <th className='px-4 py-2 border'>Product</th>
            <th className='px-4 py-2 border'>Column 2</th>
            <th className='px-4 py-2 border'>Column 3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className='even:bg-gray-100 odd:bg-white'>
              <td className='px-4 py-2 border'>{row.col1}</td>
              <td className='px-4 py-2 border'>{row.col2}</td>
              <td className='px-4 py-2 border'>{row.col3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
