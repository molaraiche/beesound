import Image from "next/image";
import Link from "next/link";
import React from "react";
// import ProductCard from "./ProductCard";
import { cardType } from "@/types/types";

const ProductsDetails = ({
  title,
  imgURL,
  price,
  brand,
  model,
  color,
  factor,
  technology,
}: cardType) => {
  return (
    <div>
      <div className=''>
        <Link href=''>X</Link>
      </div>
      <div className=''>
        <div className=''>
          <div className=''>
            <Image src={imgURL} alt='' width={400} height={400} />
          </div>
          <div className=''>
            <Image
              src='/assets/gaming-headphone-3.png'
              alt=''
              width={400}
              height={400}
            />
            <Image src={imgURL} alt='' width={400} height={400} />
            <Image src={imgURL} alt='' width={400} height={400} />
            <Image src={imgURL} alt='' width={400} height={400} />
          </div>
        </div>
        <div className=''>
          <h1>{title}</h1>
          <div className=''>
            <div
              style={{ background: "red" }}
              className={`w-[27px] h-[27px] rounded-full`}></div>{" "}
            <div
              style={{ background: "red" }}
              className={`w-[27px] h-[27px] rounded-full`}></div>{" "}
            <div
              style={{ background: "red" }}
              className={`w-[27px] h-[27px] rounded-full`}></div>
          </div>
          <p>${price}</p>
          <div className=''>
            <p>
              Brand: <span>{brand}</span>
            </p>
            <p>
              Model Name: <span>{model}</span>
            </p>
            <p>
              Color: <span>{color}</span>
            </p>
            <p>
              Form Factor: <span>{factor}</span>
            </p>
            <p>
              Connectivity Technology: <span>{technology}</span>
            </p>
          </div>
          <div className=''>
            <button> Add To Cart </button>
          </div>
        </div>
      </div>
      <div className=''>
        <h1>Related Porudcts</h1>
        <div className=''></div>
      </div>
    </div>
  );
};

export default ProductsDetails;
