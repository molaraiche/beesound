"use client";
import { signOut } from "firebase/auth";
import { deleteCookie } from "cookies-next";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      deleteCookie("token");
      router.push("/admin");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className='py-2 px-10 flex items-center gap-2 bg-opacity-0 border-none text-secondary font-semibold'>
      <CiLogout className='w-[24px] h-[24px]' />
      Logout
    </button>
  );
};

export default Logout;
