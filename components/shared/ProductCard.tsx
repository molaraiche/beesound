import Image from "next/image";
interface cardType {
  imgURL: string;
  title: string;
  price: number;
  colors: string;
}
const ProductCard = ({ imgURL, title, price, colors }: cardType) => {
  return (
    <div className='w-[304px] h-[498px]'>
      <div className='bg-dark-white w-[303px] h-[395px] flex items-center justify-center rounded-[5px] '>
        <Image
          src={imgURL}
          alt='BeeSound hero image'
          width={318}
          height={306}
          className='rotate-[20deg]'
        />
      </div>
      <div className=''>
        <h3 className='text-2xl font-medium'>{title}</h3>
        <div>
          <div
            className={`w-[27px] h-[27px] bg-[${colors}] rounded-full`}></div>
        </div>
        <p className='text-2xl font-medium'>$ {price} </p>
      </div>
    </div>
  );
};

export default ProductCard;
