import InCart from "@/components/shared/InCart";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import CheckoutButton from "@/components/shared/CheckoutButton";

const Cart = () => {
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
              {" "}
              Product title
            </p>
            <p className='text-center font-medium text-secondary'>
              product Color
            </p>
          </div>
          <div className='w-[20%] flex items-center justify-center'>
            <p>price</p>
          </div>
        </div>
        <InCart />
      </div>
      <div className='h-[10vh] flex items-center justify-end '>
        {/* <Link
          href='/checkout'
          className='bg-primary rounded-[10px] text-white py-2 px-10 font-medium'>
          Checkout
        </Link> */}
        <CheckoutButton />
      </div>
    </div>
  );
};

export default Cart;
