import Image from "next/image";
interface premiumCardTypee {
  title: string;
  imgURL: string;
  width: number;
  height: number;
  className?: string;
  bg: string;
}
const PremiumCard = ({ title, imgURL, className, bg }: premiumCardTypee) => {
  return (
    <div
      style={{
        backgroundColor: bg,
      }}
      className='flex lg:flex-row flex-col items-center justify-between w-[700px] lg:h-[400px] h-[600px] py-14 px-10  rounded-tr-[10px] rounded-tl-[90px] rounded-bl-[10px] rounded-br-[90px] text-white'>
      <div className=''>
        <h1 className='text-[27px] font-medium leading-[43px]'>{title}</h1>
        <button className=' mt-3 border-2 rounded-[10px] border-primary py-2.5 px-8 bg-dark-white text-secondary'>
          Buy Now
        </button>
      </div>
      <div className=''>
        <Image
          src={imgURL}
          alt={title}
          width={400}
          height={200}
          className={className}
        />
      </div>
    </div>
  );
};

export default PremiumCard;
