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
  classeName,
  cardHeight,
  cardWidth,
}: productType) => {
  return (
    <div
      className={`w-[${cardWidth}px] h-[${cardHeight}px] relative lg:my-0 my-10`}>
      <div className='bg-dark-white flex items-center justify-center rounded-[5px]'>
        <div className='flex'>
          {discount ? (
            <div className='absolute top-[5vh] rounded-full bg-[#F00] w-[40px] h-[40px] flex items-center justify-center text-white'>
              {discount}%
            </div>
          ) : null}
          <Image
            src={image}
            alt={title}
            width={250}
            height={250}
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
              className='w-[27px] h-[27px] rounded-full border border-white'></div>
          ))}
        </div>
        {oldPrice && (
          <p className='text-2xl font-medium text-[#616161] line-through'>
            $ {oldPrice}
          </p>
        )}
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-medium'>$ {price} </p>
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
