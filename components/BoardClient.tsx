"use client";
import Dashboard from "@/components/Dashboard";
import Logout from "@/components/shared/LogoutBtn";
import Image from "next/image";
import Link from "next/link";
import { getCookie } from "cookies-next";
const role = getCookie("role") as string | null;

const BoardClient = ({ username }: { username: string }) => {
  return (
    <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <div className='flex justify-between items-center w-full h-[10vh]'>
        <Link href='/' className='flex items-center gap-1'>
          <Image
            src='/assets/logo.svg'
            alt='BeeSound logo'
            width={14}
            height={19}
          />
          <span className='text-[23px]'>BeeSound</span>
        </Link>
        <Logout role={`${role}`} />
      </div>
      <h1 className='text-2xl'>
        Welcome to the Admin Dashboard
        <span className='text-primary font-semibold ml-2'>{username}</span>.
      </h1>
      <Dashboard />
    </div>
  );
};

export default BoardClient;
