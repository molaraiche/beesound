"use client";
import { productSchema } from "@/schema/productSchema";
import { productType } from "@/types/types";
import { getProductById, updateProduct } from "@/utils/server.action";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface EditFormInputsProps {
  productId: string | null;
}

const EditFormInputs: React.FC<EditFormInputsProps> = ({ productId }) => {
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
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        const productData = await getProductById(productId);

        if (productData) {
          setProduct(productData);
        } else {
          console.error(`Product with ID ${productId} not found`);
        }
      };
      fetchProduct();
    }
  }, [productId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: name === "price" || name === "oldPrice" ? Number(value) : value,
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

  const handleSingleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setProduct({
      ...product,
      color: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    if (productId) {
      await updateProduct(productId, result.data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center min-h-[90vh] h-auto'>
      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Title:</label>
          <div className=''>
            <input
              type='text'
              className='input'
              placeholder='Title'
              name='title'
              value={product.title}
              onChange={handleChange}
            />
            {errors.title && <p className='error-text'>{errors.title}</p>}
          </div>
        </div>
        <div className='formGrp'>
          <label className='label'>Price:</label>

          <div className=''>
            <input
              type='number'
              className='input'
              placeholder='Price'
              name='price'
              value={product.price}
              onChange={handleChange}
            />
            {errors.price && <p className='error-text'>{errors.price}</p>}
          </div>
        </div>
      </div>

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Main Image:</label>
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
          <label className='label'>Other Images:</label>
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

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Brand:</label>
          <div className=''>
            <input
              type='text'
              className='input'
              placeholder='Brand'
              name='brand'
              value={product.brand}
              onChange={handleChange}
            />
            {errors.brand && <p className='error-text'>{errors.brand}</p>}
          </div>
        </div>
        <div className='formGrp'>
          <label className='label'>Model:</label>
          <div className=''>
            <input
              type='text'
              className='input'
              placeholder='Model'
              name='model'
              value={product.model}
              onChange={handleChange}
            />
            {errors.model && <p className='error-text'>{errors.model}</p>}
          </div>
        </div>
      </div>

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Factor:</label>
          <div className=''>
            <input
              type='text'
              className='input'
              placeholder='Factor'
              name='factor'
              value={product.factor}
              onChange={handleChange}
            />

            {errors.factor && <p className='error-text'>{errors.factor}</p>}
          </div>
        </div>
        <div className='formGrp'>
          <label className='label'>Technology:</label>

          <div className=''>
            <input
              type='text'
              className='input'
              placeholder='Technology'
              name='technology'
              value={product.technology}
              onChange={handleChange}
            />
            {errors.technology && (
              <p className='error-text'>{errors.technology}</p>
            )}
          </div>
        </div>
      </div>

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Discount:</label>
          <div className=''>
            <input
              type='text'
              className='input'
              placeholder='true or false'
              name='discount'
              value={product.discount ? "true" : "false"}
              onChange={(e) => {
                setProduct({
                  ...product,
                  discount: e.target.value === "true",
                });
              }}
            />
            {errors.discount && <p className='error-text'>{errors.discount}</p>}{" "}
            <input
              type='text'
              className='input'
              placeholder='true or false'
              name='discount'
              value={product.discount ? "true" : "false"}
              onChange={(e) => {
                setProduct({
                  ...product,
                  discount: e.target.value === "true",
                });
              }}
            />
            {errors.discount && <p className='error-text'>{errors.discount}</p>}
          </div>
        </div>
        <div className='formGrp'>
          <label className='label'>Old Price:</label>
          <div className=''>
            <input
              type='number'
              className='input'
              placeholder='Old Price'
              name='oldPrice'
              value={product.oldPrice}
              onChange={handleChange}
            />
            {errors.oldPrice && <p className='error-text'>{errors.oldPrice}</p>}
          </div>
        </div>
      </div>

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Type:</label>
          <div className=''>
            <input
              type='text'
              className='input'
              placeholder='Type'
              name='type'
              value={product.type}
              onChange={handleChange}
            />
            {errors.type && <p className='error-text'>{errors.type}</p>}
          </div>
        </div>
        <div className='formGrp'>
          <label className='label'>Single Color:</label>
          <div className=''>
            <input
              type='text'
              className='input'
              placeholder='Color'
              name='color'
              value={product.color}
              onChange={handleSingleColorChange} // Handle single color change
            />
            {errors.color && <p className='error-text'>{errors.color}</p>}
          </div>
        </div>
      </div>

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Colors (multiple):</label>
          <div className=''>
            <input
              type='text'
              className='input'
              placeholder='Add your hex colors (e.g. #000, #fff)'
              name='colors'
              value={product.colors.join(", ")} // Pre-fill with multiple colors
              onChange={handleColorsChange}
            />
            {errors.colors && <p className='error-text'>{errors.colors}</p>}
          </div>
        </div>
      </div>

      <div className='w-full flex items-center justify-center h-[10vh] gap-4'>
        <Link
          href='/admin/board'
          className='bg-dark-white text-primary py-4 px-20 w-fit rounded-[10px] font-medium'>
          Cancel
        </Link>
        <button
          type='submit'
          className='bg-primary text-white font-medium py-4 lg:px-40 px-20 rounded-[10px] w-fit flex items-center justify-center'>
          Update Product
        </button>
      </div>
    </form>
  );
};

export default EditFormInputs;
