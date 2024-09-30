import { productType } from "@/types/types";
import Image from "next/image";

const ProductCard = ({
  image,
  title,
  price,
  colors,
  width,
  height,
  oldPrice,
  discount,
  classeName,
}: productType) => {
  return (
    <div className='w-[304px] h-[498px] relative lg:my-0 my-10'>
      <div className='bg-dark-white w-[303px] h-[395px] flex items-center justify-center rounded-[5px] '>
        <div className='flex'>
          {discount ? (
            <div className='absolute top-[5vh] rounded-full bg-[#F00] w-[40px] h-[40px] flex items-center justify-center text-white'>
              50%
            </div>
          ) : null}
          <Image
            src={image}
            alt={title}
            width={width}
            height={height}
            className={classeName}
          />
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-2xl font-medium'>{title}</h3>
        <div className='flex gap-2 my-5'>
          {colors.map((color) => (
            <div
              key={color}
              style={{ background: color }}
              className={`w-[27px] h-[27px] rounded-full border border-red-600`}></div>
          ))}
        </div>

        {oldPrice && (
          <p className='text-2xl font-medium text-[#616161] line-through	'>
            $ {oldPrice},00
          </p>
        )}
        <p className='text-2xl font-medium'>$ {price} </p>
      </div>
    </div>
  );
};

export default ProductCard;
