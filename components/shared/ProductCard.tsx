import { cardType } from "@/types/types";
import Image from "next/image";

const ProductCard = ({
  imgURL,
  title,
  price,
  colors,
  width,
  height,
}: cardType) => {
  return (
    <div className='w-[304px] h-[498px]'>
      <div className='bg-dark-white w-[303px] h-[395px] flex items-center justify-center rounded-[5px] '>
        <Image
          src={imgURL}
          alt={title}
          width={width}
          height={height}
          className='rotate-[20deg] hover:scale-110	transition-all'
        />
      </div>
      <div className='mt-5'>
        <h3 className='text-2xl font-medium'>{title}</h3>
        <div className='flex gap-2 my-5'>
          {colors.map((color) => (
            <div
              key={color}
              style={{ background: color }}
              className={`w-[27px] h-[27px] rounded-full`}></div>
          ))}
        </div>
        <p className='text-2xl font-medium'>$ {price} </p>
      </div>
    </div>
  );
};

export default ProductCard;
