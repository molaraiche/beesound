import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className='bg-primary lg:container lg:mx-auto mx-[10%] md:px-14 sm:px-10 xsm:px-4 rounded-tr-[5px] rounded-tl-[5px] rounded-bl-[5px] rounded-br-[150px] flex items-center lg:justify-between justify-center lg:h-[430px] h-auto lg:flex-nowrap flex-wrap my-10'>
      <div className='flex flex-col'>
        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl xsm:text-3xl  text-white font-medium lg:w-[520px] w-full leading-[58px]'>
          Discover The Brand New Headset In Market
        </h1>
        <p className='text-white mt-[22px] leading-7 lg:w-[540px] w-full'>
          BeeSound is the one of the world’s largest online shops that providing
          over 1500 headphones for its costumers from over 80 countries
        </p>
        <div className='mt-10'>
          <Link
            href='/collection'
            className='bg-white border-2 border-secondary py-2.5 px-8 rounded-[10px] text-secondary'>
            Buy Now
          </Link>
        </div>
      </div>
      <div className=''>
        <Image
          src='/assets/headphone-1.png'
          alt='BeeSound hero image'
          width={364}
          height={351}
          className='rotate-[20deg]'
        />
      </div>
    </section>
  );
};

export default Home;
