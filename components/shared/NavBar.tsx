"use client";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { TbShoppingBag } from "react-icons/tb";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import Logout from "./LogoutBtn";
const role = getCookie("role") as string | null;
interface menuType {
  menu: boolean;
}
interface searchType {
  searchToggle: boolean;
}

const decodeToken = (token: string) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const NavBar = () => {
  const [menu, setMenu] = useState<menuType>({ menu: true });
  const [searchToggle, setSearchToggle] = useState<searchType>({
    searchToggle: false,
  });

  const [logOutDisplay, setLogOutDisplay] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = getCookie("token") as string | null;
    const role = getCookie("role") as string | null;

    if (token) {
      setIsLoggedIn(true);

      const decodedToken = decodeToken(token);
      const email = decodedToken?.email || null;
      setUserName(email);

      if (role === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const menuHandler = () => setMenu({ menu: !menu.menu });
  const closeHandler = () => setMenu({ menu: true });
  const searchHandler = () => {
    setMenu({ menu: true });
    setSearchToggle({ searchToggle: !searchToggle.searchToggle });
  };

  return (
    <header className='lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 flex items-center h-[10vh] justify-between'>
      <Link href='/' className='flex items-center gap-1' onClick={closeHandler}>
        <Image
          src='/assets/logo.svg'
          alt='BeeSound logo'
          width={14}
          height={19}
        />
        <span className='text-[23px]'>BeeSound</span>
      </Link>
      <nav
        className={`flex gap-[85px] lg:static absolute top-[10vh] lg:bg-white bg-secondary  lg:flex-row flex-col right-0 lg:w-fit w-full items-center lg:py-0 py-4 lg:text-black text-white transition-all
        ${
          menu.menu
            ? "lg:translate-y-0 -translate-y-[200%]"
            : "-translate-y-[0%]"
        }
        `}>
        <Link
          href='/collection'
          onClick={closeHandler}
          className='font-semibold hover:text-primary'>
          Our Collection
        </Link>
        <Link
          href='/arrivals'
          onClick={closeHandler}
          className='font-semibold hover:text-primary'>
          New Arrivals
        </Link>
        <Link
          href='/gamers'
          onClick={closeHandler}
          className='font-semibold hover:text-primary'>
          For Gamers{" "}
        </Link>
      </nav>
      <div
        className={`flex justify-between lg:gap-20 xsm:gap-10 lg:static absolute top-[41vh] right-0 lg:w-fit w-full sm:flex-row xsm:flex-col items-center lg:py-0 p-4 lg:bg-white bg-secondary text-white lg:text-black transition-all
        ${
          menu.menu
            ? " lg:translate-y-0 -translate-y-[800%]"
            : "-translate-y-[0%]"
        }
        `}>
        <div className='flex items-center gap-4 '>
          <div className='flex items-center gap-1'>
            <input
              placeholder='Search'
              type='search'
              className={`border-2 border-secondary rounded-lg transition-all py-4 px-2 outline-none ${
                searchToggle.searchToggle ? "w-60 h-7" : "w-0 h-0 invisible"
              }`}
            />
            <IoMdSearch
              className='w-[24px] h-[24px] cursor-pointer hover:text-primary'
              onClick={searchHandler}
            />
          </div>
          <Link href='/cart'>
            <TbShoppingBag
              className='w-[24px] h-[24px] '
              onClick={closeHandler}
            />
          </Link>
        </div>
        {isLoggedIn && !isAdmin ? (
          <div className='relative'>
            <span
              className='font-semibold text-primary cursor-pointer'
              onClick={() => setLogOutDisplay(!logOutDisplay)}>
              Welcome, {userName}
            </span>
            <div
              className={`absolute bg-secondary   items-center justify-center right-0 left-0 rounded-lg ${
                logOutDisplay ? "flex" : "hidden"
              } `}>
              <Logout className='text-white' role={`${role}`} />
            </div>
          </div>
        ) : (
          <Link
            href='/sign-up'
            onClick={closeHandler}
            className='border-2 py-2.5 px-8 rounded-[10px] lg:border-secondary lg:text-secondary'>
            Sign Up
          </Link>
        )}
      </div>
      <div className='lg:hidden'>
        {menu.menu ? (
          <RiMenu3Fill className='w-[24px] h-[24px] ' onClick={menuHandler} />
        ) : (
          <IoMdClose className='w-[24px] h-[24px] ' onClick={menuHandler} />
        )}
      </div>
    </header>
  );
};

export default NavBar;
