"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import CartModal from "./cartModal";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";

function MainHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 z-10  bg-[#f9fafb86] backdrop-blur-md shadow">
        <div className="text-xl font-bold">Dr. Watch</div>
        <div className="flex items-center gap-x-4">
          <div className="relative flex items-center">
            <input
              type="text"
              className={`transition-all duration-300 ease-in-out transform origin-right border border-gray-300 rounded-full px-4 py-1 focus:outline-none focus:ring focus:ring-blue-300 ${
                searchOpen
                  ? "w-48 opacity-100"
                  : "w-0 opacity-0 pointer-events-none"
              }`}
              placeholder="جستجو..."
            />
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full bg-gray-200"
            >
              <CiSearch size={24} />
            </button>
          </div>
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="p-2 rounded-full bg-gray-200"
          >
            <span className="sr-only">Cart</span>
            <LiaShoppingBagSolid size={24} />
          </button>
          <Link href="/profile" className="p-2 rounded-full bg-gray-200">
            <IoPersonOutline size={24} />
          </Link>
        </div>
      </header>
      {cartOpen && (
        <>
          {" "}
          <div
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
          ></div>
          <CartModal setCartOpen={setCartOpen} />
        </>
      )}
    </>
  );
}

export default MainHeader;
