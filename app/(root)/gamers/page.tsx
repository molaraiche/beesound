import ProductCard from "@/components/shared/ProductCard";
import { productType } from "@/types/types";
import { getGamersProducts } from "@/utils/server.action";
import Link from "next/link";
import React from "react";

const Gamers = async () => {
  const products: productType[] = await getGamersProducts();

  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 flex flex-wrap items-center justify-center my-10'>
      <div className='flex gap-8 justify-center items-center flex-wrap'>
        {products.map((product: productType) => (
          <Link
            key={product.id}
            href={{
              pathname: `/collection/${product.id}`,
              query: {
                title: product.title,
                price: product.price,
                image: product.image,
                colors: product.colors,
                width: product.width,
                height: product.height,
              },
            }}>
            <ProductCard
              price={product.price}
              title={product.title}
              image={product.image}
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

export default Gamers;
