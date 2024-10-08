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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      }, 30000);
      return;
    }

    addProduct(result.data);
    route.push("/admin/board");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center h-[90vh]'>
      <div className='flex items-center justify-between'>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Title:
          </label>
          <div className=''>
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
          <label htmlFor='' className='label'>
            Price:
          </label>
          <div className=''>
            <input
              type='number'
              className='input'
              placeholder='Price'
              step='0.01'
              id=''
              name='price'
              onChange={handleChange}
            />
            {errors.price && <p className='error-text'>{errors.price}</p>}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Main Image:
          </label>
          <div className=''>
            <input
              type='file'
              className='input block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-secondary hover:file:bg-blue-100'
              id='image'
              onChange={handleImageUpload}
            />
            {errors.image && <p className='error-text'>{errors.image}</p>}
          </div>
        </div>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Other Images:
          </label>
          <div className=''>
            <input
              type='file'
              className='input block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-secondary hover:file:bg-blue-100'
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

      <div className='flex items-center justify-between'>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Discount:
          </label>
          <div className=''>
            <input
              type='text'
              className='input'
              placeholder='true or false'
              id=''
              name='discount'
              onChange={handleChange}
            />
            {errors.discount && <p className='error-text'>{errors.discount}</p>}
          </div>
        </div>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Old Price:
          </label>
          <div className=''>
            <input
              type='number'
              className='input'
              step='0.01'
              placeholder='Old Price'
              id=''
              name='oldPrice'
              onChange={handleChange}
            />
            {errors.oldPrice && <p className='error-text'>{errors.oldPrice}</p>}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Description:
          </label>
          <div className=''>
            <textarea
              cols={0}
              rows={0}
              className='input'
              placeholder='Product Description'
              name='description'
            />
            {errors.description && (
              <p className='error-text'>{errors.description}</p>
            )}
          </div>
        </div>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Colors:
          </label>
          <div className=''>
            <input
              type='text'
              className='input'
              placeholder='add your hex colors ex: #000, #fff'
              id='colors'
              name='colors'
              onChange={handleColorsChange}></input>
            {errors.colors && <p className='error-text'>{errors.colors}</p>}
          </div>
        </div>
      </div>

      <div className='w-full flex items-center justify-center h-[10vh] gap-4'>
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
