import LastProducts from "./Components/LastProducts"
import LastUsers from "./Components/LastUsers"
import ProductCard from "./Components/ProductCard"

function QuickOverView() {
  return (
    <div className="space-y-10 grid grid-cols-5 *:p-5 *:border *:primary-border-color *:bg-white *:rounded-xl gap-5 *:shadow">
        <LastProducts/>
        <LastUsers/>
    </div>
  )
}

export default QuickOverView