import Link from "next/link";
import ProductCard from "@/components/shared/ProductCard";
import { productType } from "@/types/types";
import { getAllDocuments } from "@/utils/server.action"; // Adjust the import path

const Collection = async () => {
  // Fetch the data directly from the server
  const products: productType[] = await getAllDocuments();
  console.log(products);
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
                imgURL: product.image,
                colors: product.images, // Or if colors is separate, adjust accordingly
                width: product.width,
                height: product.height,
              },
            }}>
            <ProductCard
              price={product.price}
              title={product.title}
              image={product.image}
              colors={product.colors} // Assuming "colors" in your old code was the list of images
              width={product.width}
              height={product.height}
              classeName='rotate-[20deg] hover:scale-110 transition-all'
              id={product.id}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Collection;
