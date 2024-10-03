import Link from "next/link";
import Table from "./Table";

const Dashboard = () => {
  return (
    <section className='w-full'>
      <div className='flex justify-end'>
        <Link
          href='/admin/board/add'
          className='bg-primary font-medium py-2 px-4 rounded-[10px] text-white'>
          <span>Add New Product</span>
        </Link>
      </div>

      <Table data={[]} />
    </section>
  );
};

export default Dashboard;
