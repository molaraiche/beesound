import { products } from "@/constants/products";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import ProductCard from "./shared/ProductCard";
import { productType } from "@/types/types";

const NewArrivals = () => {
  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <div className='my-10'>
        <div className='flex items-center justify-between'>
          <h1 className='text-secondary text-[27px] font-medium'>
            New Arrivals
          </h1>
          <div className=''>
            <Link
              href='/arrivals'
              className='flex items-center gap-1 text-[#616161]'>
              <span>See More</span>
              <GoArrowRight />
            </Link>
          </div>
        </div>
        <div className='flex items-center lg:justify-between justify-center mt-5 gap-[22px] lg:flex-nowrap flex-wrap'>
          {products.newArrivals.map((product: productType) => (
            <ProductCard
              key={product.id}
              price={product.price}
              title={product.title}
              imgURL={product.image}
              colors={product.colors}
              width={product.width}
              height={product.height}
              classeName='hover:scale-110	transition-all'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
