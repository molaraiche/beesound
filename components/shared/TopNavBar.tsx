import Link from "next/link";

const TopNavBar = () => {
  return (
    <div className='bg-secondary h-[5vh] flex items-center justify-end px-10'>
      <Link href='/admin/board' className='text-white text-lg font-semibold'>
        Admin Dashboard
      </Link>
    </div>
  );
};

export default TopNavBar;
