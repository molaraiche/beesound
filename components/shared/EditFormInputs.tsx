"use client";
import { productType } from "@/types/types";
import { getProductById, updateProduct } from "@/utils/server.action";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface EditFormInputsProps {
  productId: string | null; // Accept the product ID as a prop
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

  const [loading, setLoading] = useState(true);

  // Fetch the product data when the component mounts
  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        const productData = await getProductById(productId); // Fetch product data by ID

        if (productData) {
          // Check if productData is not null or undefined
          setProduct(productData); // Set product only if data exists
        } else {
          console.error(`Product with ID ${productId} not found`);
        }

        setLoading(false); // Set loading to false after fetching (whether successful or not)
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
    if (productId) {
      await updateProduct(productId, product); // Call updateProduct instead of addProduct
    }
  };

  if (loading) return <div>Loading product details...</div>;

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center justify-center flex-wrap'>
      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Title:</label>
          <input
            type='text'
            className='input'
            placeholder='Title'
            name='title'
            value={product.title} // Pre-fill with product data
            onChange={handleChange}
          />
        </div>
        <div className='formGrp'>
          <label className='label'>Price:</label>
          <input
            type='number'
            className='input'
            placeholder='Price'
            name='price'
            value={product.price} // Pre-fill with product data
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Main Image:</label>
          <input
            type='file'
            className='input block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-secondary hover:file:bg-blue-100'
            id='image'
            onChange={handleImageUpload}
          />
        </div>
        <div className='formGrp'>
          <label className='label'>Other Images:</label>
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
      </div>

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Brand:</label>
          <input
            type='text'
            className='input'
            placeholder='Brand'
            name='brand'
            value={product.brand}
            onChange={handleChange}
          />
        </div>
        <div className='formGrp'>
          <label className='label'>Model:</label>
          <input
            type='text'
            className='input'
            placeholder='Model'
            name='model'
            value={product.model}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Factor:</label>
          <input
            type='text'
            className='input'
            placeholder='Factor'
            name='factor'
            value={product.factor}
            onChange={handleChange}
          />
        </div>
        <div className='formGrp'>
          <label className='label'>Technology:</label>
          <input
            type='text'
            className='input'
            placeholder='Technology'
            name='technology'
            value={product.technology}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Discount:</label>
          <input
            type='text'
            className='input'
            placeholder='true or false'
            name='discount'
            value={product.discount ? "true" : "false"} // Convert boolean to string
            onChange={(e) => {
              setProduct({
                ...product,
                discount: e.target.value === "true", // Convert string back to boolean
              });
            }}
          />
        </div>
        <div className='formGrp'>
          <label className='label'>Old Price:</label>
          <input
            type='number'
            className='input'
            placeholder='Old Price'
            name='oldPrice'
            value={product.oldPrice} // Pre-fill with product data
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Type:</label>
          <input
            type='text'
            className='input'
            placeholder='Type'
            name='type'
            value={product.type}
            onChange={handleChange}
          />
        </div>
        <div className='formGrp'>
          <label className='label'>Single Color:</label>
          <input
            type='text'
            className='input'
            placeholder='Color'
            name='color'
            value={product.color}
            onChange={handleSingleColorChange} // Handle single color change
          />
        </div>
      </div>

      <div className='formHolder'>
        <div className='formGrp'>
          <label className='label'>Colors (multiple):</label>
          <input
            type='text'
            className='input'
            placeholder='Add your hex colors (e.g. #000, #fff)'
            name='colors'
            value={product.colors.join(", ")} // Pre-fill with multiple colors
            onChange={handleColorsChange}
          />
        </div>
      </div>

      <div className='w-full flex items-center justify-center h-[10vh]'>
        <button
          type='submit'
          className='bg-primary text-white font-medium py-4 lg:px-40 px-20 rounded-[10px] w-[30%] flex items-center justify-center'>
          Update Product
        </button>
      </div>
    </form>
  );
};

export default EditFormInputs;
