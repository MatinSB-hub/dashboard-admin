import SectionTitle from "../../../Components/Common/SectionTitle";
import ProductCard from "./ProductCard";
import { products } from "../../../data/Products";
import OpenInPage from "./OpenInPage";

function LastProducts() {
  return (
    <div className="col-span-3">
      <SectionTitle title="اخرین محصولات" />

      <div className="space-y-3 mt-3">
        {products.slice(-3).map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>

      <OpenInPage itemsLength={products.length} navigateTo="/Products" />
    </div>
  );
}

export default LastProducts;
