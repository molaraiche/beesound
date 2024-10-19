"use client";
import { FaCartPlus } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useCart } from "@/context/CartContext";

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
  const { updateCartCount } = useCart();

  const addToCartHandler = (e: React.MouseEvent) => {
    e.preventDefault();

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productExists = cart.some((item: CartItem) => item.id === product.id);

    if (!productExists) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount(cart.length);
      toast.success(`${product.title} has been added to cart`);
    } else {
      toast.info(`${product.title} already in cart !`);
    }
  };

  return (
    <div>
      <button
        onClick={addToCartHandler}
        className='flex items-center gap-2 bg-primary primary-2 py-2 px-4 rounded-lg text-white hover:bg-opacity-2'>
        <FaCartPlus className='w-[26px] h-[26px]' title='Add to cart' />
        <span> Add To Cart </span>
      </button>
    </div>
  );
};

export default AddToCart;
