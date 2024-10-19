import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#F2F5FF] mt-10 w-full flex items-center justify-center'>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <section className='flex items-center justify-between  w-full lg:h-[30vh] h-auto lg:flex-nowrap flex-wrap'>
          <div className='flex flex-col gap-4'>
            <Link href='/' className='flex items-center gap-1'>
              <Image
                src='/assets/logo.svg'
                alt='BeeSound logo'
                width={14}
                height={19}
              />
              <span className='text-[23px]'>BeeSound</span>
            </Link>
            <p className='lg:w-[370px] w-full'>
              BeeSound is the one of the world’s largest online shops that
              providing over 1500 headphones for its costumers from over 80
              countries
            </p>
            <div className='flex gap-[25px] items-center justify-center'>
              <Link
                href='/'
                className='w-[42px] h-[42px] rounded-full bg-[#E8E8E8] p-3 flex items-center justify-center hover:text-primary'>
                <FaInstagram className='w-[26px] h-[26px]' />
              </Link>
              <Link
                href='/'
                className='w-[42px] h-[42px] rounded-full bg-[#E8E8E8] p-3 flex items-center justify-center hover:text-primary'>
                <FaLinkedinIn className='w-[26px] h-[26px]' />
              </Link>
              <Link
                href='/'
                className='w-[42px] h-[42px] rounded-full bg-[#E8E8E8] p-3 flex items-center justify-center hover:text-primary'>
                <FaTelegramPlane className='w-[26px] h-[26px]' />
              </Link>
              <Link
                href='/'
                className='w-[42px] h-[42px] rounded-full bg-[#E8E8E8] p-3 flex items-center justify-center hover:text-primary'>
                <FaWhatsapp className='w-[26px] h-[26px]' />
              </Link>
            </div>
          </div>
          <div className='flex justify-between gap-5 w-full my-4'>
            <div className='flex flex-col lg:w-[157px] w-fit h-[172px] '>
              <h4 className='text-2xl font-medium mb-2'>Site Map</h4>
              <Link href='/' className='mt-1'>
                About Us
              </Link>
              <Link href='/' className='mt-1'>
                Contact Us
              </Link>
              <Link href='/' className='mt-1'>
                FAQ&apos;s
              </Link>
              <Link href='/' className='mt-1'>
                Customers Services
              </Link>
            </div>
            <div className='flex flex-col lg:w-[157px] w-fit h-[172px] '>
              <h4 className='text-2xl font-medium mb-2'>Products</h4>
              <Link href='/' className='mt-1'>
                Headphones
              </Link>
              <Link href='/' className='mt-1'>
                Speakers
              </Link>
            </div>
          </div>
          <div className='flex flex-col lg:w-[310px] w-full h-[172px] items-center justify-between '>
            <h4 className='text-2xl font-medium mb-2'>Subscription</h4>
            <form
              action=''
              className='flex flex-col items-center justify-center'>
              <input
                type='email'
                className='bg-[#E8E8E8] p-4 w-[307px] rounded-[10px]'
                placeholder='Enter Your Email'
              />
              <button className='p-4 bg-secondary w-[307px] mt-3 text-[#787878] rounded-[10px] border-2 border-secondary hover:border-primary hover:bg-primary hover:text-dark-white font-semibold'>
                Submit Your Email
              </button>
            </form>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
