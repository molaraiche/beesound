import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <div className='flex flex-col items-center justify-center h-screen'>
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
          <Link
            href='/sign-up'
            className='border-2 border-secondary text-secondary font-medium py-2 px-10 rounded-lg'>
            Sign up
          </Link>
        </div>
        <div className='flex h-[90vh] items-center justify-between flex-col'>
          <div className='h-[20vh] flex items-center justify-center'>
            <h1 className='text-5xl font-semibold text-secondary'>Sign in</h1>
          </div>
          <div className='w-full flex flex-col items-center justify-center h-[60vh]'>
            <form className='bg-secondary p-20 text-white rounded-xl flex flex-col gap-5'>
              <div className='flex items-center justify-between gap-5 w-full'>
                <label htmlFor='' className='w-[100px]'>
                  Email:
                </label>
                <input
                  type='email'
                  placeholder='Email'
                  className='bg-secondary outline-none font-medium text-white border-2 focus:border-2 focus:border-primary border-white rounded-full w-[400px] p-4'
                />
              </div>
              <div className='flex items-center gap-5 w-full'>
                <label htmlFor='' className='w-[100px]'>
                  Password:
                </label>
                <input
                  type='password'
                  placeholder='Password'
                  className='bg-secondary outline-none font-medium text-white border-2 focus:border-2 focus:border-primary border-white rounded-full w-[400px] p-4'
                />
              </div>
              <div className='flex justify-end'>
                <p>
                  Don&apos;t have an account?
                  <Link
                    href='/sign-up'
                    className=' text-primary font-bold mx-2'>
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
            <div className='flex gap-10 my-10'>
              <button className='py-2 px-10 border-secondary border-2 text-secondary font-medium rounded-md flex items-center gap-2 hover:bg-dark-white hover:text-primary'>
                <FaGoogle />
                Sign in with Google
              </button>
              <button className='py-2 px-10 border-secondary border-2 text-secondary font-medium rounded-md hover:bg-primary hover:text-white hover:border-primary'>
                Sign in
              </button>
            </div>
          </div>
        </div>
        <div className='h-[10vh] flex justify-end w-full px-10'>
          <Link
            href='/admin'
            className='border-2 border-primary hover:bg-primary hover:text-white text-primary h-fit py-2 px-10 rounded-full font-medium'>
            Admin
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
