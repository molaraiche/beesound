import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import ProductCard from "./shared/ProductCard";
import { productType } from "@/types/types";
import { getBestSellingProducts } from "@/utils/server.action";

const BestSelling = async () => {
  const products: productType[] = await getBestSellingProducts();

  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 py-10'>
      <div className='flex items-center justify-between my-3'>
        <h1 className='text-secondary text-[27px] font-medium'>
          Our Best Selling
        </h1>
        <div className=''>
          <Link
            href='/collection'
            className='flex items-center gap-1 text-[#616161]'>
            <span>See More</span>
            <GoArrowRight />
          </Link>
        </div>
      </div>
      <div className='flex items-center lg:justify-between justify-center mt-5 gap-5 flex-wrap lg:flex-nowrap'>
        {products.map((product: productType) => (
          <Link key={product.id} href={`/collection/${product.id}`}>
            <ProductCard
              id={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
              colors={product.colors}
              width={product.width}
              height={product.height}
              classeName='hover:scale-110 transition-all object-cover'
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
