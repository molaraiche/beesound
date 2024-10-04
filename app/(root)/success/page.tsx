// app/success/page.tsx

export default function SuccessPage() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='text-center bg-white p-10 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-green-500'>
          Payment Successful!
        </h1>
        <p className='mt-4'>Thank you for your purchase!</p>
      </div>
    </div>
  );
}
