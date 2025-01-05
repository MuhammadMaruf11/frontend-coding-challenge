"use client";

import React, { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/types";
import { ProductModal } from "@/views/products/productModal/productModal";
import { BackToHome } from "@/components/backToHome/backToHome";
import { ProductList } from "@/views/products/productList/productList";
import { PaginationControls } from "@/views/products/paginationControls/paginationControls";
import { usePagination } from "@/hooks/usePagination";
import { PRODUCTS_DATA } from "@/data/productsData";

export const Products: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { currentPage, totalPages, paginatedItems: paginatedProducts, handlePageChange } = usePagination({ items: PRODUCTS_DATA, itemsPerPage: 5 });

  // Extract product ID from query parameters
  const productId = searchParams.get("product");
  const selectedProduct = productId ? PRODUCTS_DATA.find((p) => p.id === productId) : null;

  const handleOpenModal = useCallback((product: Product) => {
    router.push(`/products?product=${product.id}`);
  }, [router]);

  const handleCloseModal = useCallback(() => {
    router.push("/products");
  }, [router]);

  return (
    <div>
      <BackToHome />
      <ProductList products={paginatedProducts} onOpenModal={handleOpenModal} />
      <div className="h-4" />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};
