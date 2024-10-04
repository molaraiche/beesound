// app/cancel/page.tsx

export default function CancelPage() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='text-center bg-white p-10 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-red-500'>Payment Canceled</h1>
        <p className='mt-4'>
          Your payment was not completed. Please try again later.
        </p>
      </div>
    </div>
  );
}
