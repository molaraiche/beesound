import { productType } from "@/types/types";
import ProductCard from "./shared/ProductCard";
import Counter from "./Counter";
import { getDiscountsProducts } from "@/utils/server.action";
import Link from "next/link";

const BlackFriday = async () => {
  const products: productType[] = await getDiscountsProducts();

  return (
    <div className='bg-dark-black'>
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 py-28'>
        <div className='flex text-white justify-between lg:flex-nowrap flex-wrap gap-10'>
          <div className='my-10 flex flex-col lg:items-start items-center'>
            <h1 className='text-[40px] font-medium leading-[54px]'>
              Our Black Friday Discount
            </h1>
            <Counter />
          </div>
          <div className='flex lg:flex-nowrap flex-wrap items-center justify-center gap-10 '>
            {products.map((product: productType) => (
              <Link href={`/collection/${product.id}`} key={product.id}>
                <ProductCard
                  image={product.image}
                  title={product.title}
                  oldPrice={product.oldPrice}
                  price={product.price}
                  colors={product.colors}
                  discount={true}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFriday;
