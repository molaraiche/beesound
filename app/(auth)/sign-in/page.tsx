import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex justify-between items-center w-full h-[10vh]'></div>
        <div className='flex h-[90vh] items-center justify-between flex-col'>
          <div className='h-[20vh] flex items-center justify-center'>
            <Link href='/' className='flex items-center gap-1'>
              <Image
                src='/assets/logo.svg'
                alt='BeeSound logo'
                width={30}
                height={30}
              />
              <span className='text-5xl'>BeeSound</span>
            </Link>
          </div>
          <div className='w-full flex flex-col items-center justify-center h-[60vh]'>
            <div className='flex gap-10 my-10 bg-secondary p-10 rounded-lg'>
              <button className='py-4 px-10 border-dark-white border-2 text-white bg-dar font-medium rounded-full flex items-center gap-2 hover:bg-dark-white hover:text-primary hover:'>
                <FaGoogle />
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
        <div className='h-[10vh] flex justify-end w-full '>
          <Link
            href='/admin'
            className='border-2 border-primary hover:bg-primary hover:text-white text-primary h-fit py-2 px-10 rounded-lg font-medium'>
            Admin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
