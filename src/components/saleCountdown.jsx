"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function DiscountedProductSection() {
  // Use a fixed endTime for consistency
  const endTime = new Date();
  endTime.setDate(endTime.getDate() + 3);
  // Set the end time for the sale (example: 3 days from now)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = endTime - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Sale has ended
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="p-4 mt-8 bg-white rounded-md shadow-md">
      <h3 className="text-2xl font-bold text-gray-800">پیشنهاد ویژه 🔥</h3>
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Product Image */}
        <div className="w-full md:w-1/3 lg:w-1/4 p-4">
          <Image
            src="/sale.webp" // Replace with actual product image
            alt="Discounted Product"
            width={200}
            height={200}
            className="w-full h-auto rounded-md"
            layout="responsive"
          />
        </div>

        {/* Sale Details and Timer */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start">
          <p className="text-xl font-bold text-red-500 mt-2">15% تخقیف</p>
          <p className="text-gray-600 mt-1 text-lg">زمان محدود</p>
          <div className="mt-4 flex gap-x-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{timeLeft.seconds}</span>
              <span className="text-xs text-gray-500">ثانیه</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{timeLeft.minutes}</span>
              <span className="text-xs text-gray-500">دقیقه</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{timeLeft.hours}</span>
              <span className="text-xs text-gray-500">ساعت</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">{timeLeft.days}</span>
              <span className="text-xs text-gray-500">روز</span>
            </div>
          </div>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            خرید کنید
          </button>
        </div>
      </div>
    </section>
  );
}
