import { useNavigate } from "react-router";
import SectionTitle from "../../Components/Common/SectionTitle";
import Summaries from "../../Features/Summaries/Summaries";
import DetailsChart from "../../Features/DetailsChart/DetailsChart";
import ProductsTable from "../../Features/ProductsTable/ProductsTable";
import QuickOverView from "../../Features/QuickOverView/QuickOverView";
import useTitle from "../../Hooks/useTitle";

function Home() {
  useTitle("داشبورد")
  const Navigate = useNavigate();
  const CTAButton = () => {
    const ClickHandler = () => {
      Navigate("/products");
    };

    return (
      <button
        onClick={ClickHandler}
        className="primary-bg px-4 py-2 text-sm rounded-md"
      >
        ایجاد محصول
      </button>
    );
  };
  return (
    <div>
      <SectionTitle title="داشبورد" button={<CTAButton />} />
      <Summaries />
      <div className="mt-20 pb-10 space-y-10">
        <DetailsChart />
        <ProductsTable />
        <QuickOverView/>
      </div>
    </div>
  );
}

export default Home;
