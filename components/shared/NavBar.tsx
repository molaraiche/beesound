"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbShoppingBag } from "react-icons/tb";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { getAllCollection } from "@/utils/server.action";
import { productType } from "@/types/types";

interface menuType {
  menu: boolean;
}
interface searchType {
  searchToggle: boolean;
}

const NavBar = () => {
  const [menu, setMenu] = useState<menuType>({ menu: true });
  const [searchToggle, setSearchToggle] = useState<searchType>({
    searchToggle: false,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<productType[]>([]);
  const [allProducts, setAllProducts] = useState<productType[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const products = await getAllCollection();
      setAllProducts(products);
    }
    fetchProducts();
  }, []);

  const menuHandler = () => setMenu({ menu: !menu.menu });
  const closeHandler = () => setMenu({ menu: true });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    if (query.length > 0) {
      const filteredProducts = allProducts.filter((product) =>
        product.title.toLowerCase().includes(query)
      );
      setSearchResults(filteredProducts);
    } else {
      setSearchResults([]);
    }
  };

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
        className={`flex gap-[85px] lg:static absolute top-[15vh] lg:bg-white bg-secondary  lg:flex-row flex-col right-0 lg:w-fit w-full items-center lg:py-0 py-4 lg:text-black text-white transition-all z-10
        ${
          menu.menu
            ? "lg:translate-y-0 -translate-y-[200%] "
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
        className={`flex justify-between lg:gap-20 xsm:gap-10 lg:static absolute top-[45vh] right-0 lg:w-fit w-full sm:flex-row xsm:flex-col items-center lg:py-0 p-4 lg:bg-white bg-secondary text-white lg:text-black transition-all z-10
        ${
          menu.menu
            ? " lg:translate-y-0 -translate-y-[800%]"
            : "-translate-y-[0%]"
        }
        `}>
        <div className='flex items-center gap-4 '>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center gap-1'>
              <input
                placeholder='Search'
                type='search'
                value={searchTerm}
                onChange={handleSearch}
                className={`border-2 border-secondary rounded-lg transition-all py-4 px-2 outline-none ${
                  searchToggle.searchToggle ? "w-60 h-7" : "w-0 h-0 invisible"
                }`}
              />
              <IoMdSearch
                className='w-[24px] h-[24px] cursor-pointer hover:text-primary'
                onClick={searchHandler}
                title='Search'
              />
            </div>

            {searchTerm && (
              <div className='bg-white border border-gray-200 rounded-lg shadow-md w-60 absolute top-[5vh] left-3.5 px-2 z-10'>
                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <Link
                      href={`/collection/${product.id}`}
                      key={product.id}
                      className='p-2 border-b border-gray-100  '>
                      <p>{product.title}</p>
                      <p className='text-sm text-secondary'>${product.price}</p>
                    </Link>
                  ))
                ) : (
                  <div className='p-2 text-gray-500'>No results found</div>
                )}
              </div>
            )}
          </div>

          <Link href='/cart'>
            <TbShoppingBag
              title='Cart'
              className='w-[24px] h-[24px] '
              onClick={closeHandler}
            />
          </Link>
        </div>
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
