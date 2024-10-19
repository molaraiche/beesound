import Image from "next/image";
import React from "react";
import { productType } from "@/types/types";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Back from "./Back";
import Link from "next/link";
import { getNewArrivalsProducts } from "@/utils/server.action";
import AddToCart from "./AddToCart";

const ProductsDetails = async ({
  id,
  title,
  image,
  price,
  colors,
  images,
  description,
  oldPrice,
}: productType) => {
  const products: productType[] = await getNewArrivalsProducts();
  console.log(oldPrice);
  return (
    <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <Back
        icon={true}
        style={
          "w-[40px] h-[40px] rounded-full flex items-center justify-center bg-primary text-dark-white"
        }
      />
      <div className='flex items-center justify-between w-full lg:flex-row flex-col'>
        <div className='flex items-center justify-center lg:w-[60%] w-full lg:flex-row md:flex-row flex-col '>
          <div className='lg:w-[303px] w-[40%] h-[359px] flex items-center justify-center'>
            <Zoom>
              <Image src={image} alt='' width={200} height={300} />
            </Zoom>
          </div>
          <div className='flex flex-wrap items-center justify-center lg:w-[400px] w-full my-5 gap-4'>
            {images?.map((img) => (
              <div
                key={img}
                className='w-[150px] h-[176px] bg-dark-white flex items-center justify-center'>
                <Zoom>
                  <Image
                    src={img}
                    alt=''
                    width={80}
                    height={80}
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
          {oldPrice && (
            <p className='text-2xl font-medium text-red-500 line-through'>
              ${oldPrice}
            </p>
          )}
          <p className='text-2xl font-medium'>${price}</p>
          <div className='flex flex-col mt-3'>
            <p className='text-lg leading-7 mt-10'>{description}</p>
          </div>
          <div className='mt-4'>
            <AddToCart
              product={{
                id: id || "",
                title: title,
                price: price,
                image: image,
                color: colors[0] || "#000",
              }}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center min-h-[60vh] h-auto'>
        <h1 className='text-2xl font-medium mt-4'>Related Porudcts</h1>
        <div className='flex items-center justify-center my-10 gap-10 min-h-[40vh] h-auto lg:flex-nowrap flex-wrap'>
          {products.map((product: productType) => (
            <Link href={`/collection/${product.id}`} key={product.id}>
              <div className='bg-dark-white w-[300px] min-h-[200px] h-fit flex flex-col items-center justify-center gap-4 '>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={300}
                  className='w-[200px] h-[300px] object-cover'
                />
                <p className='font-semibold mt-2'> {product.title} </p>
                <p className='font-medium my-2'> {product.price} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
