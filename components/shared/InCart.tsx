"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ProductInCart {
  id: string;
  title: string;
  price: number;
  image: string;
  color: string;
}

const InCart = () => {
  const [cartItems, setCartItems] = useState<ProductInCart[]>([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className='flex items-center justify-between px-10 bg-dark-white py-5'>
            <div className='flex items-center justify-between w-[80%]'>
              <Image src={item.image} alt={item.title} height={80} width={80} />
              <h3>{item.title}</h3>
              <div
                className='w-[100px] h-[20px]'
                style={{ backgroundColor: item.color }}></div>
            </div>
            <div className='w-[20%] flex items-center justify-center'>
              <p>${item.price}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default InCart;
