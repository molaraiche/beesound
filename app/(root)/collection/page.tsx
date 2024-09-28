import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/constants/products";
import { productType } from "@/types/types";
import Link from "next/link";

const Collection = () => {
  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 flex flex-wrap items-center justify-center my-10'>
      <div className='flex gap-8 justify-center items-center flex-wrap'>
        {products.bestSelling.map((product: productType) => (
          <Link
            key={product.id}
            href={{
              pathname: `/collection/${product.id}`,
              query: {
                title: product.title,
                price: product.price,
                imgURL: product.image,
                colors: product.colors,
                width: product.width,
                height: product.height,
              },
            }}>
            <ProductCard
              price={product.price}
              title={product.title}
              imgURL={product.image}
              colors={product.colors}
              width={product.width}
              height={product.height}
              classeName='rotate-[20deg] hover:scale-110	transition-all'
            />
          </Link>
        ))}
      </div>
      <div className='flex gap-8 justify-center items-center mt-20 flex-wrap'>
        {products.newArrivals.map((product: productType) => (
          <Link
            key={product.id}
            href={{
              pathname: `/collection/${product.id}`,
              query: {
                title: product.title,
                price: product.price,
                imgURL: product.image,
                colors: product.colors,
                width: product.width,
                height: product.height,
              },
            }}>
            <ProductCard
              price={product.price}
              title={product.title}
              imgURL={product.image}
              colors={product.colors}
              width={product.width}
              height={product.height}
              classeName='hover:scale-110	transition-all'
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Collection;
