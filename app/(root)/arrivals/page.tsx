import ProductCard from "@/components/shared/ProductCard";
import { productType } from "@/types/types";
import { getNewArrivalsProducts } from "@/utils/server.action";
import Link from "next/link";

const Arrivals = async () => {
  const productsA: productType[] = await getNewArrivalsProducts();

  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 flex flex-wrap items-center justify-center my-10'>
      <div className='flex gap-8 justify-center items-center mt-20 flex-wrap'>
        {productsA.map((product: productType) => (
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

export default Arrivals;
