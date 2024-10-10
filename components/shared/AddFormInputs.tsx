"use client";
import { productType } from "@/types/types";
import { addProduct } from "@/utils/server.action";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { productSchema } from "@/schema/productSchema";
import Link from "next/link";

const AddFormInputs = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const route = useRouter();

  const [product, setProduct] = useState<productType>({
    title: "",
    price: 0,
    colors: [],
    images: [],
    description: "",
    image: "",
    oldPrice: 0,
    discount: false,
    type: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]:
        name === "price" || name === "oldPrice"
          ? Number(value)
          : name === "discount"
          ? value === "true"
          : value,
    });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imagePath = `/assets/${file.name}`;
      setProduct({
        ...product,
        image: imagePath,
      });
    }
  };

  const handleColorsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const colorArray = value.split(",").map((color) => color.trim());
    setProduct({
      ...product,
      colors: colorArray,
    });
  };

  const handleImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imagePaths = Array.from(files).map(
        (file) => `/assets/${file.name}`
      );
      setProduct({
        ...product,
        images: imagePaths,
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = productSchema.safeParse(product);

    if (!result.success) {
      const formattedErrors = result.error.errors.reduce(
        (acc: Record<string, string>, curr) => {
          const key = curr.path[0] as string;
          acc[key] = curr.message;
          return acc;
        },
        {}
      );
      setErrors(formattedErrors);
      setTimeout(() => {
        setErrors({});
      }, 100000);
      return;
    }

    addProduct(result.data);
    route.push("/admin/board");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center min-h-[90vh] w-full'>
      <div className='flex items-center lg:justify-between  lg:flex-row flex-col justify-center '>
        <div className='formGrp'>
          <label htmlFor='title' className='label'>
            Title:
          </label>
          <div className='flex items-center justify-center  flex-col'>
            <input
              type='text'
              className='input'
              placeholder='Title'
              name='title'
              onChange={handleChange}
            />
            {errors.title && <p className='error-text'>{errors.title}</p>}
          </div>
        </div>
        <div className='formGrp'>
          <label htmlFor='price' className='label'>
            Price:
          </label>
          <div className='flex items-center justify-center  flex-col'>
            <input
              type='number'
              className='input'
              placeholder='Price'
              step='0.01'
              name='price'
              onChange={handleChange}
            />
            {errors.price && <p className='error-text'>{errors.price}</p>}
          </div>
        </div>
      </div>

      <div className='flex items-center lg:justify-between lg:flex-row flex-col  justify-center'>
        <div className='formGrp'>
          <label htmlFor='image' className='label'>
            Main Image:
          </label>
          <div className='flex items-center justify-center  flex-col'>
            <input
              type='file'
              className='input'
              id='image'
              onChange={handleImageUpload}
            />
            {errors.image && <p className='error-text'>{errors.image}</p>}
          </div>
        </div>
        <div className='formGrp'>
          <label htmlFor='images' className='label'>
            Other Images:
          </label>
          <div className='flex items-center justify-center  flex-col'>
            <input
              type='file'
              className='input'
              id='images'
              name='images'
              multiple
              accept='image/*'
              onChange={handleImagesChange}
            />
            {errors.images && <p className='error-text'>{errors.images}</p>}
          </div>
        </div>
      </div>

      <div className='flex items-center lg:justify-between lg:flex-row flex-col  justify-center'>
        <div className='formGrp'>
          <label htmlFor='discount' className='label'>
            Discount:
          </label>
          <div className='flex items-center justify-center  flex-col'>
            <select
              name='discount'
              id='discount'
              className='input'
              onChange={handleChange}>
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
            {errors.discount && <p className='error-text'>{errors.discount}</p>}
          </div>
        </div>
        <div className='formGrp'>
          <label htmlFor='oldPrice' className='label'>
            Old Price:
          </label>
          <div className='flex items-center justify-center  flex-col'>
            <input
              type='number'
              className='input'
              step='0.01'
              placeholder='Old Price'
              name='oldPrice'
              onChange={handleChange}
            />
            {errors.oldPrice && <p className='error-text'>{errors.oldPrice}</p>}
          </div>
        </div>
      </div>

      <div className='flex items-center lg:justify-between lg:flex-row flex-col  justify-center'>
        <div className='formGrp'>
          <label htmlFor='description' className='label'>
            Description:
          </label>
          <div className='flex items-center justify-center  flex-col'>
            <textarea
              cols={30}
              rows={3}
              className='input'
              placeholder='Product Description'
              name='description'
              onChange={handleChange}
            />
            {errors.description && (
              <p className='error-text'>{errors.description}</p>
            )}
          </div>
        </div>
        <div className='formGrp'>
          <label htmlFor='colors' className='label'>
            Colors:
          </label>
          <div className='flex items-center justify-center  flex-col'>
            <input
              type='text'
              className='input'
              placeholder='add your hex colors ex: #000, #fff'
              name='colors'
              onChange={handleColorsChange}
            />
            {errors.colors && <p className='error-text'>{errors.colors}</p>}
          </div>
        </div>
      </div>

      <div className='flex my-10 lg:flex-row flex-col justify-center '>
        <label htmlFor='type' className='label'>
          Type
        </label>
        <div className='flex items-center justify-center flex-col'>
          <select
            name='type'
            className='input'
            onChange={handleChange}
            value={product.type}>
            <option value='Collection'>Collection</option>
            <option value='Arrivals'>Arrivals</option>
            <option value='Gamers'>Gamers</option>
            <option value='Discount'>Discount</option>
            <option value='BestSelling'>BestSelling</option>
            <option value='NewArrivals'>NewArrivals</option>
          </select>
          {errors.type && <p className='error-text'>{errors.type}</p>}
        </div>
      </div>

      <div className='w-full flex items-center justify-center min-h-[10vh] h-auto my-10 gap-4 lg:flex-row flex-col-reverse'>
        <Link
          href='/admin/board'
          className='bg-dark-white text-primary py-4 px-20 w-fit rounded-[10px] font-semibold'>
          Cancel
        </Link>
        <button
          type='submit'
          className='bg-primary text-white font-medium py-4 lg:px-40 px-20 rounded-[10px] w-fit flex items-center justify-center'>
          <span className='lg:hidden block'>Add</span>
          <span className='lg:block hidden'>Create Product</span>
        </button>
      </div>
    </form>
  );
};

export default AddFormInputs;
