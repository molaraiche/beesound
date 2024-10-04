import Image from "next/image";

const InCart = () => {
  return (
    <div className='flex items-center justify-between px-10 bg-dark-white py-5'>
      <div className='flex items-center justify-between w-[80%]'>
        <Image src='/assets/beats-5.png' alt='' height={80} width={80} />
        <h3>title</h3>
        <div className='w-[100px] h-[20px] bg-purple-500 rounded-lg'></div>
      </div>

      <div className='w-[20%] flex items-center justify-center'>
        <p>price</p>
      </div>
    </div>
  );
};

export default InCart;
