"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { PiWatch } from "react-icons/pi";
import { TbSmartHome } from "react-icons/tb";

function MainFooter() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  return (
    <footer className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md border-[1px] bg-white shadow-lg p-2 rounded-t-md md:rounded-full md:min-w-[26rem] md:w-auto md:px-6 md:my-3 grid grid-cols-4 z-20">
      <Link
        href="/"
        className={`flex flex-col items-center ${
          isActive("/") ? "text-blue-600" : "text-gray-600"
        } hover:text-gray-800`}
      >
        <TbSmartHome size={24} />
        <span className="text-xs mt-1">خانه</span>
      </Link>
      <Link
        href="/products"
        className={`flex flex-col items-center ${
          isActive("/products") ? "text-blue-600" : "text-gray-600"
        } hover:text-gray-800`}
      >
        <PiWatch size={24} />
        <span className="text-xs mt-1">محصولات</span>
      </Link>
      <Link
        href="/favorites"
        className={`flex flex-col items-center ${
          isActive("/favorites") ? "text-blue-600" : "text-gray-600"
        } hover:text-gray-800`}
      >
        <IoHeartOutline size={24} />
        <span className="text-xs mt-1">علاقه مندی ها</span>
      </Link>
      <Link
        href="/profile"
        className={`flex flex-col items-center ${
          isActive("/profile") ? "text-blue-600" : "text-gray-600"
        } hover:text-gray-800`}
      >
        <IoPersonOutline size={24} />
        <span className="text-xs mt-1">پروفایل</span>
      </Link>
    </footer>
  );
}

export default MainFooter;
