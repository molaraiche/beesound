"use client";
import EditFormInputs from "@/components/shared/EditFormInputs";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  return (
    <div>
      <div className=''>
        <h1>
          Edit the product <span> {title} </span>
        </h1>
      </div>
      <div className=''>
        <EditFormInputs productId={id} />
      </div>
    </div>
  );
};

export default Page;
