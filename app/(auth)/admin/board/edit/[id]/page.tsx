"use client";
import EditFormInputs from "@/components/shared/EditFormInputs";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  return (
    <div className='bg-secondary'>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <div className='h-[10vh] flex items-center justify-center'>
          <h1 className='text-center font-semibold text-white text-3xl'>
            Edit the product: <span className='text-primary'> {title} </span>
          </h1>
        </div>
        <div className=' min-h-[90vh] h-auto'>
          <EditFormInputs productId={id} />
        </div>
      </div>
    </div>
  );
};

export default Page;
