import Image from "next/image";

const categories = [
  { id: 1, title: "ست", image: "/placeholder-image.webp" },
  { id: 2, title: "مردانه", image: "/placeholder-image.webp" },
  { id: 3, title: "زنانه", image: "/placeholder-image.webp" },
  { id: 4, title: "کلاسیک", image: "/placeholder-image.webp" },
  { id: 5, title: "دیجیتال", image: "/placeholder-image.webp" },
];

export default function StorySection() {
  return (
    <div className="flex items-baseline overflow-x-auto gap-x-4 sm:gap-x-8 py-4 bg-gray-50 px-4">
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col items-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden hide-scrollbar border-2 border-blue-500">
            <Image
              src={category.image}
              alt={category.title}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <p className="mt-2 text-sm text-center font-medium text-gray-700">{category.title}</p>
        </div>
      ))}
    </div>
  );
}
