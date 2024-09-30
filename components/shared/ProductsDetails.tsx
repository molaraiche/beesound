import Image from "next/image";
import Link from "next/link";
import React from "react";
// import ProductCard from "./ProductCard";
import { productType } from "@/types/types";

const ProductsDetails = ({
  title,
  image,
  price,
  brand,
  model,
  color,
  colors,
  factor,
  images,
  technology,
}: productType) => {
  return (
    <div>
      <div className=''>
        <Link href=''>X</Link>
      </div>
      <div className='flex items-center justify-between w-full '>
        <div className='flex items-center justify-center w-[60%] '>
          <div className='w-[303px] h-[359px]'>
            <Image src={image} alt='' width={303} height={359} />
          </div>
          <div className='flex flex-wrap w-[400px] gap-4'>
            {images?.map((img) => (
              <div
                key={img}
                className='w-[150px] h-[176px] bg-red-500 flex items-center justify-center'>
                <Image
                  src={img}
                  alt=''
                  width={120}
                  height={120}
                  className='object-cover'
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center w-[40%] flex-col'>
          <h1 className='text-2xl font-medium'>{title}</h1>
          <div className='flex'>
            {colors.map((color) => (
              <div
                key={color}
                style={{ background: color }}
                className={`w-[27px] h-[27px] rounded-full`}></div>
            ))}
          </div>
          <p>${price}</p>
          <div className='flex flex-col mt-3'>
            <p className=' mt-3'>
              <span className='font-medium'> Brand:</span> <span>{brand}</span>
            </p>
            <p className=' mt-3'>
              <span className='font-medium'>Model Name:</span>{" "}
              <span>{model}</span>
            </p>
            <p className=' mt-3'>
              <span className='font-medium'>Color:</span> <span>{color}</span>
            </p>
            <p className=' mt-3'>
              <span className='font-medium'>Form Factor:</span>{" "}
              <span>{factor}</span>
            </p>
            <p className=' mt-3'>
              <span className='font-medium'>Connectivity Technology:</span>{" "}
              <span>{technology}</span>
            </p>
          </div>
          <div className=''>
            <button className='bg-primary w-[279px] p-4 text-dark-white font-medium text-lg rounded-[10px] '>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className=''>
        <h1>Related Porudcts</h1>
        <div className=''></div>
      </div>
    </div>
  );
};

export default ProductsDetails;
