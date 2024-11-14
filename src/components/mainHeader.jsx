"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import CartModal from "./cartModal";

function MainHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="text-lg font-bold">Dr. Watch</div>
        <div className="flex items-center space-x-4">
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
              className="p-2 ml-2 rounded-full bg-gray-200"
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
