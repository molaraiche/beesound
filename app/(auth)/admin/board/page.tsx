import Dashboard from "@/components/Dashboard";
import Image from "next/image";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";

const Board = () => {
  return (
    <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <div className='flex justify-between h-[10vh] items-center'>
        <Link href='/' className='flex items-center gap-1'>
          <Image
            src='/assets/logo.svg'
            alt='BeeSound logo'
            width={14}
            height={19}
          />
          <span className='text-[23px]'>BeeSound</span>
        </Link>
        <Link href='/' className='flex items-center justify-center gap-2'>
          <IoIosLogOut className='w-[24px] h-[24px]' />
          <span className='lg:flex sm:hidden'>Logout</span>{" "}
        </Link>
      </div>
      <h1>Products Management</h1>
      <Dashboard />
    </div>
  );
};

export default Board;
