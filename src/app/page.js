import Carousel from "@/components/carousel";
import Categories from "@/components/categories";
import CostumerReviews from "@/components/costumerReviews";
import Hero from "@/components/hero";
import MainFooter from "@/components/mainFooter";
import MainHeader from "@/components/mainHeader";
import MainLink from "@/components/mainLink";
import Reviews from "@/components/reviews";
import RotatingWatch from "@/components/rotatingWatch";
import SaleCountdown from "@/components/saleCountdown";
import Services from "@/components/services";
import StorySection from "@/components/stories";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <StorySection />
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

      <div className="flex justify-center mt-8">
        <MainLink title="مشاهده محصولات جدید" href="/products" />   
      </div>
      {/* Sale count down section */}
      <SaleCountdown />
      
      <RotatingWatch />
      <Carousel title="محصولات جدید" />

<div className="flex justify-center mt-8">
  <MainLink title="مشاهده همه محصولات " href="/products" />   
</div>
<Hero />

      {/* Customer Testimonials */}
      <Reviews />
    </div>
  );
}
