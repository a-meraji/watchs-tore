"use client"
import Image from 'next/image';
import { useState } from 'react';

const categories = ["classic","sport","modern"];
const categoriesTraslation = {classic:"کلاسیک", sport :"اسپرت", modern:"مدرن"}
const products = {
  classic: [
    {
      id: 1,
      name: "ساعت کلاسیک",
      price: "670,000 تومان",
      amount: 1,
      image: "/placeholder-image.webp",
    },
    {
      id: 2,
      name: "ساعت کلاسیک2",
      price: "450,000 تومان",
      amount: 1,
      image: "/placeholder-image.webp",
    },
  ],
  sport:  [
    {
      id: 1,
      name: "ساعت اسپرت",
      price: "670,000 تومان",
      amount: 1,
      image: "/placeholder-image.webp",
    },
    {
      id: 2,
      name: "ساعت اسپرت 2",
      price: "450,000 تومان",
      amount: 1,
      image: "/placeholder-image.webp",
    },
  ],
  modern: [
    {
      id: 1,
      name: "ساعت مدرن",
      price: "670,000 تومان",
      amount: 1,
      image: "/placeholder-image.webp",
    },
    {
      id: 2,
      name: "ساعت مدرن 2",
      price: "450,000 تومان",
      amount: 1,
      image: "/placeholder-image.webp",
    },
  ],
};

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="p-4 bg-gray-100">
      {/* Categories Buttons */}
      <div className="flex gap-x-4 bg-[#202d57] px-2 pt-1 rounded-md rounded-b-none">
        {categories.map((category,index) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-white transition-colors ${
              selectedCategory === category
                ? 'bg-white text-blue-900 rounded-md rounded-b-none rounded-tl-xl rounded-tr-xl'
                : index!=categories.length-1 &&'border-l-[1px] border-l-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carousel Section */}
      <div className="p-4 bg-white rounded-md rounded-t-none">
        <h3 className="mb-2 text-lg font-semibold text-gray-800">محصولات {categoriesTraslation[selectedCategory]}</h3>
        <div className="flex overflow-x-auto space-x-4 scroll-smooth">
          {products[selectedCategory].map((product, index) => (
               <div
               key={index}
               className="flex-none w-40 p-4 bg-white shadow rounded-md"
             >
               <div className="relative w-full h-32 bg-gray-100">
                 <Image
                   src={product.image}
                   alt="Watch"
                   layout="fill"
                   objectFit="cover"
                   className="rounded-md"
                 />
               </div>
               <h4 className="mt-2 text-sm font-medium">{product.name}</h4>
               <p className="mt-1 text-sm text-gray-600">
                {product.price}
               </p>
               <button className="mt-2 px-3 py-1 text-xs bg-blue-500 text-white rounded-full">
                 مشاهده
               </button>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
