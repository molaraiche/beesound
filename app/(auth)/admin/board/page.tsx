import Dashboard from "@/components/Dashboard";
import Logout from "@/components/shared/LogoutBtn";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const BoardPage = () => {
  const cookieStore = cookies();
  const displayName = cookieStore.get("displayName")?.value;
  const email = cookieStore.get("email")?.value;
  const userName = displayName || email;
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
        <Logout />
      </div>
      <h1 className="text-2xl">
        Welcome to the Admin Dashboard{" "}
        <span className='text-primary font-semibold'>{userName}</span>,
      </h1>
      <Dashboard />
    </div>
  );
};

export default BoardPage;
