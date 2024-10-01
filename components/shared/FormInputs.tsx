import React from "react";

const FormInputs = () => {
  return (
    <form
      action=''
      className='flex flex-col justify-center w-full flex-wrap gap-4'>
      <div className='formGrp'>
        <label htmlFor='' className='label'>
          Title:
        </label>
        <input type='text' className='input' placeholder='Title' name='title' />
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
        />
      </div>
      <div className='formGrp'>
        <label htmlFor='' className='label'>
          Main Image:
        </label>
        <input
          type='file'
          className='input  block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-secondary hover:file:bg-blue-100'
          id='image'
          name=''
        />
      </div>
      <div className='formGrp'>
        <form
          action=''
          className='flex justify-center w-full items-center gap-4'>
          <label htmlFor='' className='label'>
            Colors:
          </label>
          <input
            type='text'
            className='input'
            placeholder='add your hex colors ex: #000'
            id=''
            name='colors'
          />
        </form>
      </div>
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
        />
      </div>
      <div className='formGrp'>
        <label htmlFor='' className='label'>
          {" "}
          Factor:
        </label>
        <input
          type='text'
          className='input'
          placeholder='Factor'
          id=''
          name='factor'
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
        />
      </div>
      <div className='formGrp'>
        <label htmlFor='' className='label'>
          Discount:
        </label>
        <input
          type='number'
          className='input'
          placeholder='Discount'
          id=''
          name='discount'
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
        />
      </div>
      <div className='formGrp'>
        <label htmlFor='' className='label'>
          Other Images:
        </label>
        <input
          type='file'
          className='input block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-secondary hover:file:bg-blue-100'
          id=''
          name='images'
        />
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
