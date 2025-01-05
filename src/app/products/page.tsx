// app/products/page.tsx
import { Suspense } from "react";
import { Products } from "@/views/products";

const ProductsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Products />
    </Suspense>
  );
};

export default ProductsPage;
