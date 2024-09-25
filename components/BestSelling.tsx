import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import ProductCard from "./shared/ProductCard";

const BestSelling = () => {
  return (
    <section className='lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-secondary text-[27px] font-medium'>
          Our Best Selling
        </h1>
        <Link
          href='/collection'
          className='flex items-center gap-1 text-[#616161]'>
          <span>See More</span>
          <GoArrowRight />
        </Link>
      </div>
      <div className=''>
        {/* <ProductCard /> */}
      </div>
    </section>
  );
};

export default BestSelling;
