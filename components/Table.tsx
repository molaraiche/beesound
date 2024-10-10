import { MdEdit } from "react-icons/md";
import Link from "next/link";
import { getAllCollection } from "@/utils/server.action";
import { productType } from "@/types/types";
import DeleteProduct from "./shared/DeleteProduct";

const Table = async () => {
  const products: productType[] = await getAllCollection();

  return (
    <div className='overflow-x-auto  text-secondary'>
      {products.length > 0 ? (
        <table className='min-w-full table-auto border-collapse my-10'>
          <thead>
            <tr>
              <th className='px-4 py-2 border w-[80%]'>Product</th>
              <th className='px-4 py-2 border w-[20%]'>Management</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className='even:bg-gray-100 odd:bg-white'>
                <td className='px-4 py-2 border'>{product.title}</td>
                <td className=' py-2  border flex items-center justify-between px-10 lg:flex-nowrap flex-wrap gap-5'>
                  <Link
                    href={{
                      pathname: `/admin/board/edit/${product.id}`,
                      query: {
                        id: product.id,
                        title: product.title,
                      },
                    }}
                    className=' bg-secondary text-white flex items-center gap-2 py-2 px-4 rounded-[10px] hover:opacity-80 w-full'>
                    <MdEdit />
                    Edit
                  </Link>
                  <DeleteProduct id={product.id as string} />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className='font-semibold h-[60vh] flex-col gap-10 flex items-center justify-center'>
          <h1 className='text-4xl text-primary'>
            Please add a Product first so you can be able to manage it
          </h1>
          <Link
            href='/admin/board/add'
            className='bg-primary font-medium py-2 px-4 rounded-[10px] text-white'>
            <span>Add New Product</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Table;
