import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

const ProductsDetails = () => {
  return (
    <div>
      <div className=''>
        <Link href=''>X</Link>
      </div>
      <div className=''>
        <div className=''>
          <div className=''>
            <Image
              src='/assets/gaming-headphone-3.png'
              alt=''
              width={400}
              height={400}
            />
          </div>
          <div className=''>
            <Image
              src='/assets/gaming-headphone-3.png'
              alt=''
              width={400}
              height={400}
            />
            <Image
              src='/assets/gaming-headphone-3.png'
              alt=''
              width={400}
              height={400}
            />
            <Image
              src='/assets/gaming-headphone-3.png'
              alt=''
              width={400}
              height={400}
            />
            <Image
              src='/assets/gaming-headphone-3.png'
              alt=''
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className=''>
          <h1>Beats By Dre</h1>
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
          <p>$29.99</p>
          <div className=''>
            <p>Brand: </p>
            <p> Model Name: </p>
            <p> Color: </p>
            <p>Headphones: </p>
            <p> Wireless: </p>
          </div>
          <div className=''>
            <button> Add To Cart </button>
          </div>
        </div>
      </div>
      <div className=''>
        <h1>Related Porudcts</h1>
        <div className=''>
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
          <ProductCard imgURL={""} title={""} price={0} colors={[]} />
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
