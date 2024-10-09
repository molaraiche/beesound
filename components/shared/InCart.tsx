"use client";

import { MdDelete } from "react-icons/md";
import Image from "next/image";

interface InCartProps {
  item: {
    image: string;
    title: string;
    color?: string;
    price: number;
  };
  onRemove: () => void;
}

const InCart = ({ item, onRemove }: InCartProps) => {
  return (
    <div className='flex items-center justify-between px-10 bg-dark-white py-5'>
      <div className='flex items-center justify-between w-[80%]'>
        <Image src={item.image} alt={item.title} height={80} width={80} />
        <h3>{item.title}</h3>
        <div
          style={{ backgroundColor: item.color ?? "#ccc" }}
          className='w-[100px] h-[20px] rounded-lg'></div>
      </div>
      <div className='w-[20%] flex items-center justify-center'>
        <p>${item.price}</p>
      </div>
      <button
        className='text-red-500 underline ml-4'
        title='Delete product from cart'
        onClick={onRemove}>
        <MdDelete className='w-[24px] h-[24px]' />
      </button>
    </div>
  );
};

export default InCart;
