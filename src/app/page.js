import Carousel from "@/components/carousel";
import Categories from "@/components/categories";
import CostumerReviews from "@/components/costumerReviews";
import MainFooter from "@/components/mainFooter";
import MainHeader from "@/components/mainHeader";
import Reviews from "@/components/reviews";
import SaleCountdown from "@/components/saleCountdown";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <MainHeader />

      {/* Hero Banner */}
      <section className="p-4">
        <div className="relative w-full bg-gray-200 rounded-md">
          <Image
            src="/hero.webp"
            alt="Featured Watch"
            width={1792}
            height={1024}
            layout="responsive"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </section>

      {/* Featured Products Carousel */}
      <Carousel title="پرطرفدارها" />
      {/* Sale count down section */}
      <SaleCountdown />
      {/* Categories */}
      <Categories />
      {/* services */}

      {/* Customer Testimonials */}
      <Reviews />

      <MainFooter />
    </div>
  );
}
