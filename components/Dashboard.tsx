import Link from "next/link";
import Table from "./Table";
import { getAllCollection } from "@/utils/server.action";
import { productType } from "@/types/types";

const Dashboard = async () => {
  const products: productType[] = await getAllCollection();

  return (
    <section className='w-full'>
      {products.length > 0 ? (
        <div className='flex justify-end'>
          <Link
            href='/admin/board/add'
            className='bg-primary font-medium py-2 px-4 rounded-[10px] text-white'>
            <span>Add New Product</span>
          </Link>
        </div>
      ) : null}

      <Table />
    </section>
  );
};

export default Dashboard;
