import ProductsDetails from "@/components/shared/ProductsDetails";
import { getProductById } from "@/utils/server.action"; // Import the server action to fetch product data

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProductById(params.id); // Fetch the product data on the server

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <ProductsDetails
      id={product.id}
      image={product.image} // Adjust field names to match your product schema
      title={product.title}
      price={product.price}
      colors={product.colors} // Assuming colors/images are part of the product data
      width={product.width}
      height={product.height}
    />
  );
};

export default ProductPage;
