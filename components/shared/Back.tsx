"use client";
import { useRouter } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";

const Back = ({ icon, style }: { icon: boolean; style: string }) => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <div className='flex items-center justify-end h-[10vh]'>
      <div onClick={goBack} className={style}>
        {icon ? <IoCloseSharp /> : "Cancel"}
      </div>
    </div>
  );
};
  
export default Back;
