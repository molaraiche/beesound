"use client";
import { signOut } from "firebase/auth";
import { deleteCookie } from "cookies-next";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";
type logoutType = {
  className?: string;
};
const Logout = ({ className }: logoutType) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      deleteCookie("token");
      router.push(`/sign-up`);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className={`py-2 px-10 flex items-center gap-2 bg-opacity-0 border-none  font-semibold ${
        className || "text-secondary"
      }`}>
      <CiLogout className='w-[24px] h-[24px]' />
      Logout
    </button>
  );
};

export default Logout;
