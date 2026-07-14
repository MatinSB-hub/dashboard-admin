import { useEffect, useState } from "react";
import SectionTitle from "../../Components/Common/SectionTitle";
import { products } from "../../data/Products";
import ProductsGridView from "../../Features/ProductsView/ProductsGridView";
import ProductsTableView from "../../Features/ProductsView/ProductsTableView";

import ProductsPageButtons from "./Components/ProductsPageButtons";
import useAddProduct from "../../Hooks/useAddProduct";
import useLocalStorage from "../../Hooks/useLocalStorage";
import useTitle from "../../Hooks/useTitle";

function Products() {
  useTitle("محصولات");
  const [allProducts, setAllProducts] = useState(products); 
  const [paginatedProducts, setPaginatedProducts] = useState(allProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterType, setFilterType] = useState("all");
  const [layoutType, setLayoutType] = useLocalStorage("layout", "grid");
  const [newProduct, setNewProduct] = useState({
    id: crypto.randomUUID(),
    title: "",
    description: "",
    img: "/images/product-img.png",
    isPublished: false,
    price: "",
    entity: "",
  });

  useEffect(() => {
    filterProductsHandler();
  }, [filterType, allProducts]);

  const addProductHandler = () => {
    const resetValueStructure = {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      img: "/images/product-img.png",
      isPublished: false,
      price: "",
      entity: "",
    };
    useAddProduct(
      newProduct,
      setNewProduct,
      resetValueStructure,
      allProducts,
      setAllProducts,
    );
  };

  const toggleLayout = () => {
    const layout = layoutType === "table" ? "grid" : "table";
    setLayoutType(layout);
    setLayoutType("layout", layout);
  };

  const changeFilterTypeHandler = (type) => {
    setFilterType(type);
  };
  const filterProductsHandler = () => {
    let filterProducts = null;
    if (filterType === "general") {
      filterProducts = allProducts.filter(
        (item) => String(item.isPublished) === "true",
      );
    } else if (filterType === "private") {
      filterProducts = allProducts.filter(
        (item) => String(item.isPublished) === "false",
      );
    } else {
      filterProducts = allProducts;
    }
    setFilteredProducts(filterProducts);
  };
  return (
    <div>
      <SectionTitle
        title="لیست محولات"
        button={
          <ProductsPageButtons
            toggleLayout={toggleLayout}
            layoutType={layoutType}
            newProduct={newProduct}
            setNewProduct={setNewProduct}
            addProductHandler={addProductHandler}
          />
        }
      />
      <section>
        {layoutType === "table" ? (
          <ProductsTableView
            paginatedProducts={paginatedProducts}
            setPaginatedProducts={setPaginatedProducts}
            filteredProducts={filteredProducts}
            changeFilterTypeHandler={changeFilterTypeHandler}
            filterType={filterType}
          />
        ) : (
          <ProductsGridView
            paginatedProducts={paginatedProducts}
            setPaginatedProducts={setPaginatedProducts}
            filteredProducts={filteredProducts}
          />
        )}
      </section>
    </div>
  );
}

export default Products;
