"use client"; // This ensures the component is client-side

import { useRouter } from "next/navigation"; // For handling redirects
import { useEffect, useState } from "react"; // We need this to check authentication status
import { onAuthStateChanged } from "firebase/auth"; // Firebase auth check
import { auth } from "@/firebase/firebaseConfig"; // Firebase config
import Dashboard from "@/components/Dashboard"; // Your dashboard component
import Image from "next/image"; // For the logo
import Link from "next/link"; // For navigation
import { IoIosLogOut } from "react-icons/io"; // Icon for logout

const Board: React.FC = () => {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState<boolean | null>(null); // Track authentication status (null means loading)

  useEffect(() => {
    // Check user authentication state using Firebase
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If the user is authenticated, allow rendering
        setAuthenticated(true);
      } else {
        // If not authenticated, redirect to login
        setAuthenticated(false);
        router.push("/admin"); // Redirect to login page if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup when component unmounts
  }, [router]);

  // If we haven't confirmed the auth state yet, return nothing (to block rendering)
  if (authenticated === null) {
    return null; // Render nothing until Firebase auth state is confirmed
  }

  // Render the protected content if the user is authenticated
  if (authenticated) {
    return (
      <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
        <div className='flex justify-between h-[10vh] items-center'>
          <Link href='/' className='flex items-center gap-1'>
            <Image
              src='/assets/logo.svg'
              alt='BeeSound logo'
              width={14}
              height={19}
            />
            <span className='text-[23px]'>BeeSound</span>
          </Link>
          <Link href='/' className='flex items-center justify-center gap-2'>
            <IoIosLogOut className='w-[24px] h-[24px]' />
            <span className='lg:flex sm:hidden'>Logout</span>
          </Link>
        </div>
        <h1 className='font-bold text-secondary text-4xl my-10'>
          Products Management
        </h1>
        <Dashboard /> {/* Your dashboard content */}
      </div>
    );
  }

  // If not authenticated, we will have already redirected, so return null
  return null;
};

export default Board;
