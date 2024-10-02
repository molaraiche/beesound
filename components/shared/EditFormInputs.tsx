"use client";
import { productType } from "@/types/types";
import { addProduct } from "@/utils/server.action";
import { ChangeEvent, FormEvent, useState } from "react";

const FormInputs = () => {
  const [product, setProduct] = useState<productType>({
    title: "",
    price: 0,
    colors: [],
    images: [],
    brand: "",
    model: "",
    color: "",
    factor: "",
    image: "",
    technology: "",
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
      [name]: name === "price" ? Number(value) : value,
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addProduct(product);
  };

  const handleSingleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProduct({
      ...product,
      color: value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-center w-full flex-wrap gap-4'>
      <div className='flex items-center justify-center my-4'>
        <h1 className='text-4xl text-white font-semibold'>Edit Product</h1>
      </div>
      <div className='formGrp'>
        <label htmlFor='' className='label'>
          Title:
        </label>
        <input
          type='text'
          className='input'
          placeholder='Title'
          name='title'
          onChange={handleChange}
        />
      </div>

      <div className='formGrp'>
        <label htmlFor='' className='label'>
          Price:
        </label>
        <input
          type='number'
          className='input'
          placeholder='Price'
          id=''
          name='price'
          onChange={handleChange}
        />
      </div>
      <div className='formGrp'>
        <label htmlFor='' className='label'>
          Main Image:
        </label>
        <input
          type='file'
          className='input block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-secondary hover:file:bg-blue-100'
          id='image'
          onChange={handleImageUpload}
        />
      </div>

      <div className='flex justify-between gap-4'>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Brand:
          </label>
          <input
            type='text'
            className='input'
            placeholder='Brand'
            id=''
            name='brand'
            onChange={handleChange}
          />
        </div>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Model:
          </label>
          <input
            type='text'
            className='input'
            placeholder='Model'
            id=''
            name='model'
            onChange={handleChange}
          />
        </div>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Factor:
          </label>
          <input
            type='text'
            className='input'
            placeholder='Factor'
            id=''
            name='factor'
            onChange={handleChange}
          />
        </div>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Technology:
          </label>
          <input
            type='text'
            className='input'
            placeholder='Technology'
            id=''
            name='technology'
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='flex justify-between gap-4'>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Discount:
          </label>
          <input
            type='text'
            className='input'
            placeholder='true or false'
            id=''
            name='discount'
            onChange={handleChange}
          />
        </div>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Old Price:
          </label>
          <input
            type='text'
            className='input'
            placeholder='Old Price'
            id=''
            name='oldPrice'
            onChange={handleChange}
          />
        </div>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Price:
          </label>
          <input
            type='number'
            className='input'
            placeholder='Price'
            id=''
            name='price'
            onChange={handleChange}
          />
        </div>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Type
          </label>
          <input
            type='text'
            className='input'
            placeholder='Type'
            id='type'
            name='type'
            onChange={handleChange}
          />
        </div>
        <div className='formGrp'>
          <label htmlFor='' className='label'>
            Color:
          </label>
          <input
            type='text'
            className='input'
            placeholder='Color'
            name='color'
            onChange={handleSingleColorChange}
          />
        </div>
      </div>

      <div className='flex justify-between gap-4'>
        <div className='formGrp w-full'>
          <label htmlFor='' className='label'>
            Other Images:
          </label>
          <input
            type='file'
            className='input block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-secondary hover:file:bg-blue-100'
            id='images'
            name='images'
            multiple
            accept='image/*'
            onChange={handleImagesChange}
          />
        </div>
        <div className='formGrp flex justify-center w-full items-center gap-4'>
          <label htmlFor='' className='label'>
            Colors:
          </label>
          <input
            type='text'
            className='input'
            placeholder='add your hex colors ex: #000, #fff'
            id='colors'
            name='colors'
            onChange={handleColorsChange}
          />
        </div>
      </div>
      <div className='w-full flex items-center justify-center gap-5'>
        <button
          type='submit'
          className='bg-primary text-white font-medium py-2 lg:px-40 px-20 rounded-[10px] w-[40%] flex items-center justify-center'>
          <span className='lg:hidden block'>Add</span>
          <span className='lg:block hidden'>Create Product</span>
        </button>
      </div>
    </form>
  );
};

export default FormInputs;