"use client";
import { useEffect, useState } from "react";
import { auth, db } from "@/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Dashboard from "@/components/Dashboard";
import Logout from "@/components/shared/LogoutBtn";
import Image from "next/image";
import Link from "next/link";

const BoardPage = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          const displayName = userData.displayName || userData.email;
          setUserName(displayName);
        } else {
          console.log("No such document in Firestore!");
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4'>
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
        <Logout />
      </div>
      <h1 className='text-2xl'>
        Welcome to the Admin Dashboard
        <span className='text-primary font-semibold'>{userName || "User"}</span>
        ,
      </h1>
      <Dashboard />
    </div>
  );
};

export default BoardPage;
