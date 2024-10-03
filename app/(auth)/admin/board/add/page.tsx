import AddFormInputs from "@/components/shared/AddFormInputs";

const Add = () => {
  return (
    <section className='bg-secondary lg:h-screen h-auto'>
      <div className=' lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <div className='h-[10vh] flex items-center justify-center'>
          <h1 className='text-center font-semibold text-white text-3xl'>
            Add New Product
          </h1>
        </div>
        <div className='flex items-center justify-center w-full lg:h-[80vh] h-auto'>
          <AddFormInputs />
        </div>
      </div>
    </section>
  );
};

export default Add;
