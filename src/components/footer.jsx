"use client"
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center flex justify-between items-center text-xs sm:text-base">
        {/* Contact Phone Number */}
        <p className="mb-2">تماس با ما: ۰۱۲-۳۴۵۶۷۸۹</p>
        
        {/* Copyright and Year */}
        <p className="mb-2">
          &copy; {new Date().getFullYear()} تمامی حقوق محفوظ است.
        </p>
        
        {/* Programmer Link */}
        <p>
          طراحی و توسعه:
          <Link className="text-blue-400 hover:text-blue-300" target="_blank" rel="noopener noreferrer" href="https://catchycodes.com">
              Catchy Codes
          </Link>        </p>
      </div>
    </footer>
  );
}
