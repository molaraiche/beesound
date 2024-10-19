"use client";
import { productType } from "@/types/types";
import { deleteProduct, getAllCollection } from "@/utils/server.action";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

interface DeleteProductProps {
  id: string;
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ id }) => {
  const [products, setProducts] = useState<productType[]>([]);
  const router = useRouter();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllCollection();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId: string) => {
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      try {
        await deleteProduct(productId);
        setProducts(products.filter((product) => product.id !== productId));
        toast.done("Product has been deleted");
        router.refresh();
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error(`Error: ${error}`);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => handleDelete(id)}
        className='bg-red-500 text-white flex items-center gap-2 py-2 px-4 rounded-[10px] hover:opacity-80 w-full'>
        <MdDelete />
        <span>Delete</span>
      </button>
    </>
  );
};

export default DeleteProduct;
