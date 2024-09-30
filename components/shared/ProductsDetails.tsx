import Image from "next/image";
import React from "react";
import { productType } from "@/types/types";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Back from "./Back";
import Link from "next/link";

const ProductsDetails = async ({
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
  AllProducts,
}: productType) => {
  return (
    <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <Back />
      <div className='flex items-center justify-between w-full '>
        <div className='flex items-center justify-center w-[60%] '>
          <div className='w-[303px] h-[359px]'>
            <Zoom>
              <Image src={image} alt='' width={303} height={359} />
            </Zoom>
          </div>
          <div className='flex flex-wrap w-[400px] gap-4'>
            {images?.map((img) => (
              <div
                key={img}
                className='w-[150px] h-[176px] bg-dark-white flex items-center justify-center'>
                <Zoom>
                  <Image
                    src={img}
                    alt=''
                    width={120}
                    height={120}
                    className='object-cover'
                  />
                </Zoom>
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center w-[40%] flex-col'>
          <h1 className='text-2xl font-medium'>{title}</h1>
          <div className='flex gap-2 my-3'>
            {colors.map((color) => (
              <div
                key={color}
                style={{ background: color }}
                className={`w-[27px] h-[27px] rounded-full `}></div>
            ))}
          </div>
          <p className='text-2xl font-medium'>${price}</p>
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
          <div className='mt-4'>
            <button className='bg-primary w-[279px] p-4 text-dark-white font-medium text-lg rounded-[10px] '>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center '>
        <h1 className='text-2xl font-medium mt-4'>Related Porudcts</h1>
        <div className=''>
          {AllProducts?.map((product: productType) => (
            <Link href={`/${product.type}/${product.id}`} key={product.id}>
              <div className='bg-dark-white w-[200px] h-[200px]'>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                />
                <p className='font-semibold mt-2'> {product.title} </p>
                <p className='font-medium my-2'> {product.price} </p>
                <div className='flex gap-2'>
                  {product.colors.map((color) => (
                    <div
                      style={{
                        background: color,
                      }}
                      className='w-[20px] h-[20px] rounded-full'
                      key={color}></div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
