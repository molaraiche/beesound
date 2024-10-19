"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface CartContextProps {
  cartItemsCount: number;
  updateCartCount: (count: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItemsCount, setCartItemsCount] = useState<number>(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    return storedCart.length;
  });

  const updateCartCount = (count: number) => {
    setCartItemsCount(count);
  };

  return (
    <CartContext.Provider value={{ cartItemsCount, updateCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
