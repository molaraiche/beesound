"use client";
import { productType } from "@/types/types";
import { deleteProduct, getAllCollection } from "@/utils/server.action";
import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

interface DeleteProductProps {
  id: string; // Expect a string here
}

const DeleteProduct: React.FC<DeleteProductProps> = ({ id }) => {
  const [products, setProducts] = useState<productType[]>([]); // Initial empty state for products

  // Fetch products after component mounts
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

  // Handle delete functionality
  const handleDelete = async (productId: string) => {
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (confirmed) {
      try {
        await deleteProduct(productId); // Delete product from Firebase
        setProducts(products.filter((product) => product.id !== productId)); // Update state to remove the deleted product
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <button
      onClick={() => handleDelete(id)} // Pass the id correctly here
      className='bg-red-500 text-white flex items-center gap-2 py-2 px-4 rounded-[10px] hover:opacity-80 w-full'>
      <MdDelete />
      <span>Delete</span>
    </button>
  );
};

export default DeleteProduct;
