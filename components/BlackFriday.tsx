import { products } from "@/constants/products";
import { productType } from "@/types/types";
import ProductCard from "./shared/ProductCard";
import Counter from "./Counter";

const BlackFriday = () => {
  return (
    <div className='bg-dark-black'>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 py-20'>
        <div className='flex text-white justify-between lg:flex-nowrap flex-wrap'>
          <div className='my-10 flex flex-col lg:items-start items-center w-full'>
            <h1 className='text-[40px] font-medium leading-[54px]'>
              Our Black Friday Discount
            </h1>
            <Counter />
          </div>
          <div className='flex lg:flex-nowrap flex-wrap items-center justify-center gap-5 '>
            {products.blackFriday.map((product: productType) => (
              <ProductCard
                key={product.id}
                imgURL={product.image}
                title={product.title}
                oldPrice={product.oldPrice}
                height={product.height}
                width={product.width}
                price={product.price}
                colors={product.colors}
                discount={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFriday;
