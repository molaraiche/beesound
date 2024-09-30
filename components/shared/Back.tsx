"use client";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Back = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <div className='flex items-center justify-end h-[10vh]'>
      <div
        onClick={goBack}
        className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-primary text-dark-white'>
        <IoCloseSharp />
      </div>
    </div>
  );
};

export default Back;
