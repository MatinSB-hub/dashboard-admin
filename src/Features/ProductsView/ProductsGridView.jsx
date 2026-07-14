import React from "react";
import Products from "../../pages/Products/page";
import ProductCard from "./ProductCard";
import Pagination from "../../Components/Common/Pagination";

function ProductsGridView({ paginatedProducts, setPaginatedProducts, filteredProducts }) {
  return (
    <div className="mt-10 border bg-white min-w-full primary-border-color rounded-2xl overflow-hidden">
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {paginatedProducts.map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
      <Pagination
        items={filteredProducts}
        setItems={setPaginatedProducts}
        itemsPerPage={4}
      />
    </div>
  );
}

export default ProductsGridView;
