import Link from "next/link";
import ProductCard from "@/components/shared/ProductCard";
import { productType } from "@/types/types";
import {
  getBestSellingProducts,
  getNewArrivalsProducts,
} from "@/utils/server.action";

const Collection = async () => {
  const productsBS: productType[] = await getBestSellingProducts();
  const productsA: productType[] = await getNewArrivalsProducts();

  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 flex flex-wrap items-center justify-center my-10'>
      <div className='flex gap-8 justify-center items-center flex-wrap'>
        {productsBS.map((product: productType) => (
          <Link key={product.id} href={`/collection/${product.id}`}>
            <ProductCard
              id={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
              colors={product.colors}
              width={product.width}
              height={product.height}
              cardWidth={304}
              cardHeight={498}
              classeName='rotate-[20deg] hover:scale-110 transition-all'
            />
          </Link>
        ))}
        {productsA.map((product: productType) => (
          <Link key={product.id} href={`/collection/${product.id}`}>
            <ProductCard
              id={product.id}
              price={product.price}
              title={product.title}
              image={product.image}
              colors={product.colors}
              width={product.width}
              height={product.height}
              cardWidth={304}
              cardHeight={498}
              classeName='rotate-[20deg] hover:scale-110 transition-all'
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Collection;
