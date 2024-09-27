import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/constants/products";
import { productType } from "@/types/types";
import React from "react";

const Gamers = () => {
  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 flex flex-wrap items-center justify-center my-10'>
      <div className='flex gap-8 justify-center items-center flex-wrap'>
        {products.gamers.map((product: productType) => (
          <ProductCard
            key={product.id}
            price={product.price}
            title={product.title}
            imgURL={product.image}
            colors={product.colors}
            width={product.width}
            height={product.height}
            classeName='rotate-[20deg] hover:scale-110	transition-all'
          />
        ))}
      </div>
      <div className='flex gap-8 justify-center items-center mt-20 flex-wrap'>
        {products.gamers.map((product: productType) => (
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
    </section>
  );
};

export default Gamers;
