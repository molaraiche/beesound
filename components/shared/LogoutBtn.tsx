"use client";
import { signOut } from "firebase/auth";
import { deleteCookie } from "cookies-next";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";

type logoutType = {
  className?: string;
  role?: string;
};

const Logout = ({ className, role }: logoutType) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      if (role === "admin") {
        console.log("Admin logging out");
        await signOut(auth);
        deleteCookie("role");
        deleteCookie("token");
        router.push(`/admin`);
      } else if (role === "user") {
        console.log("User logging out");
        await signOut(auth);
        deleteCookie("token");
        router.push(`/sign-up`);
      } else {
        console.error("Unknown role: Cannot determine if admin or user");
      }
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className={`py-2 px-10 flex items-center gap-2 bg-opacity-0 border-none font-semibold ${
        className || "text-secondary"
      }`}>
      <CiLogout className='w-[24px] h-[24px]' />
      Logout
    </button>
  );
};

export default Logout;
