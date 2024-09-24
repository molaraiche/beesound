"use client";

import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { TbShoppingBag } from "react-icons/tb";

const NavBar = () => {
  return (
    <header className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 flex items-center h-[10vh] justify-between'>
      <Link href='/' className='flex items-center gap-1'>
        <Image
          src='/assets/logo.svg'
          alt='BeeSound logo'
          width={14}
          height={19}
        />
        <span className='text-[23px]  '>BeeSound</span>
      </Link>
      <nav className='flex gap-[85px] lg:static absolute top-[10vh] lg:flex-row flex-col right-0 lg:w-fit w-full items-center lg:py-0 py-4'>
        <Link href='/collection'>Our Collection</Link>
        <Link href='/arrivals'>New Arrivals</Link>
        <Link href='/gamers'>For Gamers </Link>
      </nav>
      <div className='flex justify-between lg:gap-20 xsm:gap-10 lg:static absolute top-[42vh] right-0= lg:w-fit w-full sm:flex-row xsm:flex-col items-center lg:py-0 p-4'>
        <div className='flex items-center gap-4 '>
          <CiSearch className='w-[24px] h-[24px]' />
          <TbShoppingBag className='w-[24px] h-[24px]' />
        </div>
        <Link
          href='/sign-up'
          className='border-2 py-2.5 px-8 rounded-[10px] border-secondary text-secondary'>
          Sign in / Sign up
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
