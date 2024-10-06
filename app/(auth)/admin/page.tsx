"use client"; // Ensure this is a client component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use router for navigation
import { signInWithEmailAndPassword } from "firebase/auth"; // Firebase auth method
import { auth } from "@/firebase/firebaseConfig"; // Firebase config
import Image from "next/image";
import Link from "next/link";

const Admin: React.FC = () => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading
  const router = useRouter(); // Next.js router for redirection

  // Function to handle login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    setLoading(true); // Set loading to true when signing in

    try {
      // Attempt to sign in the user with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/board"); // Redirect to /admin/board on successful login
    } catch (err) {
      console.log(err);
      setError("Invalid email or password"); // Set error if login fails
      setLoading(false); // Stop loading on error
    }
  };

  return (
    <section className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex justify-between items-center w-full h-[10vh]'>
          <Link href='/' className='flex items-center gap-1'>
            <Image
              src='/assets/logo.svg'
              alt='BeeSound logo'
              width={14}
              height={19}
            />
            <span className='text-[23px]'>BeeSound</span>
          </Link>
          <Link
            href='/sign-up'
            className='border-2 border-secondary text-secondary font-medium py-2 px-10 rounded-lg'>
            Sign up
          </Link>
        </div>
        <div className='flex h-[90vh] items-center justify-between flex-col'>
          <div className='h-[20vh] flex items-center justify-center'>
            <h1 className='text-5xl font-semibold text-secondary'>Admin</h1>
          </div>
          <div className='w-full flex flex-col items-center justify-center h-[60vh]'>
            <form
              onSubmit={handleLogin} // Submit form event
              className='bg-secondary p-20 text-white rounded-xl flex flex-col gap-5'>
              <div className='flex items-center justify-between gap-5 w-full'>
                <label htmlFor='email' className='w-[100px]'>
                  Email:
                </label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  placeholder='Email'
                  className='bg-secondary outline-none font-medium text-white border-2 focus:border-primary border-white rounded-full w-[400px] p-4'
                  required
                />
              </div>
              <div className='flex items-center gap-5 w-full'>
                <label htmlFor='password' className='w-[100px]'>
                  Password:
                </label>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                  placeholder='Password'
                  className='bg-secondary outline-none font-medium text-white border-2 focus:border-primary border-white rounded-full w-[400px] p-4'
                  required
                />
              </div>
              {error && <p className='text-red-500 mt-4'>{error}</p>}{" "}
              {/* Display error message if any */}
              <div className='flex gap-10 my-10'>
                <button
                  type='submit'
                  className='py-2 px-20 bg-primary text-white font-medium rounded-md'
                  disabled={loading} // Disable button while loading
                >
                  {loading ? "Loading..." : "Sign in"}{" "}
                  {/* Show loading state */}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='h-[10vh] flex justify-end w-full px-10'>
          <Link
            href='/sign-up'
            className='border-2 border-primary hover:bg-primary hover:text-white text-primary h-fit py-2 px-10 rounded-full font-medium'>
            Back
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Admin;
