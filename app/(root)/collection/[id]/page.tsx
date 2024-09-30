import ProductsDetails from "@/components/shared/ProductsDetails";
import { getProductById } from "@/utils/server.action";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
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
      brand={product.brand}
      model={product.model}
      technology={product.technology}
      color={product.color}
      factor={product.factor}
    />
  );
};

export default ProductPage;
