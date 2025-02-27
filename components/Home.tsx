import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <div className='bg-primary rounded flex items-center lg:justify-between justify-center lg:h-[430px] h-auto lg:flex-nowrap flex-wrap my-10 p-6 w-full'>
        <div className='flex flex-col'>
          <h1 className='lg:text-5xl md:text-4xl sm:text-3xl xsm:text-3xl  text-white font-medium lg:w-[520px] w-full leading-[58px]'>
            Discover The Brand New Headset In Market
          </h1>
          <p className='text-white mt-[22px] leading-7 lg:w-[540px] w-full'>
            BeeSound is the one of the world’s largest online shops that
            providing over 1500 headphones for its costumers from over 80
            countries
          </p>
          <div className='mt-10'>
            <Link
              href='/collection/gbauM1zcHquqlsnriu4L'
              className='text-white border-2 border-white font-semibold uppercase px-6 py-2 rounded'>
              Buy Now
            </Link>
          </div>
        </div>
        <Link href='/collection/gbauM1zcHquqlsnriu4L' className=''>
          <Image
            src='/assets/headphone-1.png'
            alt='BeeSound hero image'
            width={364}
            height={351}
            className='rotate-[20deg]'
          />
        </Link>
      </div>
    </section>
  );
};

export default Home;
