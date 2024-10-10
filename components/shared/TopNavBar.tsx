import Link from "next/link";

const TopNavBar = () => {
  return (
    <div className='bg-secondary h-fit p-2 flex items-center justify-end px-10'>
      <Link
        href='/admin/board'
        className=' bg-primary py-2 px-4 rounded-md text-white text-lg font-semibold'>
        Dashboard
      </Link>
    </div>
  );
};

export default TopNavBar;
