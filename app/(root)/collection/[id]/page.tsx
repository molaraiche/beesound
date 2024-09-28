"use client";
import ProductsDetails from "@/components/shared/ProductsDetails";
import { useSearchParams } from "next/navigation";

const ProductPage = () => {
  const params = useSearchParams();

  const title = params.get("title");
  const price = params.get("price");
  const imgURL = params.get("imgURL");
  const colors = params.get("colors");
  const width = params.get("width");
  const height = params.get("height");
  return (
    <ProductsDetails
      id={0}
      imgURL={imgURL}
      title={title}
      price={price}
      colors={colors}
      width={width}
      height={width}
    />
  );
};

export default ProductPage;
