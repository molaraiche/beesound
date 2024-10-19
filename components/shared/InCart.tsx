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
        <div className='w-[33%] flex items-center justify-center'>
          <Image src={item.image} alt={item.title} height={80} width={80} />
        </div>
      </div>
      <div className='w-[25%] flex items-center justify-center'>
        <h3>{item.title}</h3>
      </div>
      <div className='w-[25%] flex items-center justify-center'>
        <p>${item.price}</p>
      </div>
      <div className='w-[25%] flex items-center justify-center'>
        <button
          className='text-red-500 underline ml-4'
          title='Delete product from cart'
          onClick={onRemove}>
          <MdDelete className='w-[24px] h-[24px]' />
        </button>
      </div>
    </div>
  );
};

export default InCart;
