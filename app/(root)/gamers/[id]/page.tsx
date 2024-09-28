"use client";
import { useSearchParams } from "next/navigation";

const ProductPage = () => {
  const params = useSearchParams();
  const title = params.get("title");
  const price = params.get("price");
  return (
    <div>
      <div className=''>{title}</div>
      <div className=''> {price} </div>
    </div>
  );
};

export default ProductPage;
