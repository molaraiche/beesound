"use client";
import { FaCartPlus } from "react-icons/fa6";

interface AddToCartProps {
  product: {
    id: string;
    title: string;
    price: number;
    image: string;
    color: string;
  };
}
interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  color: string;
}

const AddToCart = ({ product }: AddToCartProps) => {
  const addToCartHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productExists = cart.some((item: CartItem) => item.id === product.id);

    if (!productExists) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("Product added to cart");
    } else {
      console.log("Product is already in the cart");
    }
  };

  return (
    <div>
      <button
        onClick={addToCartHandler}
        className='flex items-center gap-1 bg-primary primary-2 py-2 px-4 rounded-lg text-white hover:bg-opacity-2 gap-2'>
        <FaCartPlus className='w-[26px] h-[26px]' title='Add to cart' />
        <span> Add To Cart </span>
      </button>
    </div>
  );
};

export default AddToCart;
