"use client";

import { useState, useEffect } from "react";
import InCart from "@/components/shared/InCart";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import CheckoutButton from "@/components/shared/CheckoutButton";
import { productType } from "@/types/types";

const Cart = () => {
  const [cartItems, setCartItems] = useState<productType[]>([]);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0), 0);
  };

  const removeFromCart = (itemId: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 py-28'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-medium'>Cart</h1>
        <Link
          href='/arrivals'
          className='flex items-center gap-2 text-dark-black font-medium'>
          <GoArrowLeft />
          <span>Back to Shopping</span>
        </Link>
      </div>
      <div className='min-h-[20vh] h-auto'>
        <div className='flex items-center justify-between px-10 bg-dark-white mt-10'>
          <div className='flex items-center justify-between w-[80%] my-5'>
            <p className='text-center font-medium text-secondary'>
              Product Image
            </p>
            <p className='text-center font-medium text-secondary'>
              Product Title
            </p>
            <p className='text-center font-medium text-secondary'>
              Product Color
            </p>
          </div>
          <div className='w-[20%] flex items-center justify-center'>
            <p>Price</p>
          </div>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <InCart
              key={index}
              item={{
                image: item.image,
                title: item.title,
                color: item.colors[0] || "#000",
                price: item.price,
              }}
              onRemove={() => {
                if (item.id) {
                  removeFromCart(item.id);
                } else {
                  console.error("Item id is undefined");
                }
              }}
            />
          ))
        ) : (
          <p className='text-center mt-10'>Your cart is empty</p>
        )}
      </div>
      <div className='h-[10vh] flex items-center justify-end '>
        <CheckoutButton total={calculateTotal()} />
      </div>
    </div>
  );
};

export default Cart;
