"use client"; // Ensure this is a client-side component

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig"; // Import Firebase config
import { useRouter } from "next/navigation"; // For redirecting after sign-in
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  // Function to handle Google sign-in
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    // Call Firebase signInWithPopup inside the click event handler
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in:", user);

        // Redirect to the Board page after successful login
        router.push("/admin/board");
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
        setError("Google sign-in failed. Please try again.");
      });
  };

  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex h-[90vh] items-center justify-between flex-col'>
          <div className='h-[20vh] flex items-center justify-center'>
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src='/assets/logo.svg'
                alt='BeeSound logo'
                width={30}
                height={30}
              />
              <span className='text-5xl'>BeeSound</span>
            </Link>
          </div>
          <div className='w-full flex flex-col items-center justify-center h-[60vh]'>
            <div className='flex gap-10 my-10 bg-secondary p-10 rounded-lg'>
              <button
                onClick={handleGoogleSignIn} // Call the sign-in function when clicked
                className='py-4 px-10 border-dark-white border-2 text-white bg-dark font-medium rounded-full flex items-center gap-2 hover:bg-dark-white hover:text-primary'>
                <FaGoogle />
                Sign in with Google
              </button>
              {error && <p className='text-red-500'>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
