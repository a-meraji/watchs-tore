"use client";
import { alertTypes, useAlert } from "@/context/alert";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { FiPackage } from "react-icons/fi";
import { PiWatch } from "react-icons/pi";
import { TbSmartHome } from "react-icons/tb";

function MainFooter() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const [isVisible, setIsVisible] = useState(true);
  const { triggerAlert } = useAlert();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user is near the bottom of the page
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (fullHeight - (scrollTop + windowHeight) < 100) {
        // If near the bottom, hide the MainFooter
        setIsVisible(false);
      } else {
        // If not near the bottom, show the MainFooter
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <footer 
    className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md border-[1px] bg-white shadow-lg p-2 rounded-t-md md:rounded-full md:min-w-[26rem] md:w-auto md:px-6 md:my-3 grid grid-cols-4 z-20 transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
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
        href="/orders"
        className={`flex flex-col items-center ${
          isActive("/orders") ? "text-blue-600" : "text-gray-600"
        } hover:text-gray-800`}
      >
        <FiPackage size={24} />
        <span className="text-xs mt-1">سفارشات</span>
      </Link>
      <Link
        href="tel:+98991970322"
        className={`flex flex-col items-center ${
          isActive("/profile") ? "text-blue-600" : "text-gray-600"
        } hover:text-gray-800`}
        onClick={(e) => {
          navigator.clipboard.writeText("+98991970322");
          triggerAlert({
            message: "شماره تماس کپی شد.",
            type: alertTypes.success,
          });
        }}
      >
        <IoCallOutline size={24} />
        <span className="text-xs mt-1">تماس</span>
      </Link>
    </footer>
  );
}

export default MainFooter;
