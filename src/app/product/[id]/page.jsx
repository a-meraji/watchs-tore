import ProductOverView from "@/components/product/productOverView";
import ProductReviews from "@/components/product/reviews";
import Product from "@/components/productsList/product";

// src/app/product/[id]/page.tsx
export default function ProductPage() {
    return (
      <div>
        <ProductOverView />
        <ProductReviews />
        <h6 className="text-2xl mb-4  font-bold">محصولات مشابه</h6>
        <Product />
      </div>
    );
  }