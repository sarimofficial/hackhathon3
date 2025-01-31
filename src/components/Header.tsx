"use client";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { SheetSide } from "./Humburgur";
import { NavigationMenuDemo } from "./navigationMenu";
import { useSelector } from "react-redux";
import AnnouncementBar from "./AnnouncementBar";

export default function Header() {
  const cart = useSelector((state: any) => state.cart);

  return (
    <>
      <div className="fixed z-10 top-0 w-full">
        <AnnouncementBar />
        <header className="w-full border-b backdrop-blur-sm h-[60px] md:h-[60px] flex justify-between pr-2 items-center max-w-screen-2xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center items-center">
            <SheetSide />
            <Link href="/" passHref>
              <h1 className="text-2xl md:text-4xl font-extrabold pl-2 cursor-pointer hover:text-blue-500">
                SHOP.CO
              </h1>
            </Link>
          </div>

          {/* Navigation Bar */}
          <ul className="hidden xl:flex space-x-6 ml-4 mt-2 items-center">
            <li>
              <Link href="/">
                <NavigationMenuDemo />
              </Link>
            </li>
            <li>
              <Link
                href="/sell"
                className="hover:text-blue-500 transition duration-300"
              >
                On Sale
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="hover:text-blue-500 transition duration-300"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                href="/brands"
                className="hover:text-blue-500 transition duration-300"
              >
                Brands
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[500px] h-[40px] pl-2 ml-12 md:ml-0 rounded-full hover:border-none">
            <IoIosSearch className="text-xl" />
            <input
              placeholder="Search for products..."
              className="bg-[#F0F0F0] outline-none w-full h-full rounded-full ml-2"
            />
          </div>

          {/* Right Section */}
          <div className="flex space-x-2 sm:space-x-4 items-center">
            <Link href="/cart" className="relative">
              <IoCartOutline className="text-4xl" />
              {cart.length > 0 && (
                <span className="absolute top-[-5px] bg-red-400 rounded-full text-white w-[20px] h-[20px] flex justify-center items-center p-1 text-sm right-0">
                  {cart.length}
                </span>
              )}
            </Link>
            <div className="p-4 bg-gray- flex justify-end">
      <Link href="/login">
        <MdOutlineAccountCircle className="text-4xl cursor-pointer hover:text-blue-500 transition duration-300" />
      </Link>
    </div>
          </div>
        </header>
      </div>
    </>
  );
}
