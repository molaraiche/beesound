import ProductsDetails from "@/components/shared/ProductsDetails";
import { productType } from "@/types/types";
import { getProductById } from "@/utils/server.action";
import { getAllCollection } from "@/utils/server.action";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const AllProducts: productType[] = await getAllCollection();
  const product = await getProductById(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductsDetails
      id={product.id}
      image={product.image}
      title={product.title}
      price={product.price}
      colors={product.colors}
      width={product.width}
      height={product.height}
      images={product.images}
      description={product.description}
      AllProducts={AllProducts}
    />
  );
};

export default ProductPage;
