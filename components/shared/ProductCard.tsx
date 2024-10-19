import { productType } from "@/types/types";
import Image from "next/image";
import AddToCart from "./AddToCart";

const ProductCard = ({
  id,
  image,
  title,
  price,
  colors,
  oldPrice,
  discount,
}: productType) => {
  return (
    <div
      className={` w-[350px] min-h-[500px] h-fit  relative lg:my-0 my-10 shadow-md rounded-lg`}>
      <div className='bg-dark-white flex items-center justify-center rounded-[5px] '>
        <div className='flex'>
          {discount ? (
            <div className='absolute top-1 left-2 rounded-full bg-[#F00] w-[200px] h-[40px] flex items-center justify-center text-white font-semibold'>
              BIG DISCOUNT !
            </div>
          ) : null}
          <div className='m-10'>
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              className='w-[179px] h-[242px] object-cover'
            />
          </div>
        </div>
      </div>
      <div className='mt-5 p-2 flex flex-col gap-3'>
        <h3 className='text-2xl font-medium'>{title}</h3>
        {oldPrice && (
          <p className='text-2xl font-medium text-red-500 line-through'>
            $ {oldPrice}
          </p>
        )}
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-medium '>$ {price} </p>
        </div>
        <div className='flex justify-end'>
          <AddToCart
            product={{
              id: id || "",
              title: title || "Unknown Title",
              price: price || 0,
              image: image || "/placeholder.png",
              color: colors[0] || "#000",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
