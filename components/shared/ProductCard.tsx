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
      className={`h-[440px] relative lg:my-0 my-10 shadow-md rounded-lg p-2.5 flex flex-col justify-between`}>
      <div className='bg-dark-white flex items-center justify-center rounded-[5px] '>
        <div className='flex'>
          {discount ? (
            <div className='absolute top-4 left-4 rounded-full bg-[#F00] w-fit px-2 h-[30px] flex items-center justify-center text-white font-semibold'>
              BIG DISCOUNT !
            </div>
          ) : null}
          <div className='m-10 h-[200px] flex items-center justify-center'>
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              className='object-cover'
            />
          </div>
        </div>
      </div>
      <div className='p-2 flex flex-col gap-3'>
        <h3 className='text-lg font-medium'>{title}</h3>
        {oldPrice && (
          <p className='text-2xl font-medium text-red-500 line-through w-full flex justify-end'>
            $ {oldPrice}
          </p>
        )}
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-medium text-green-500 w-full flex justify-end pr-2'>
            $ {price}
          </p>
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
