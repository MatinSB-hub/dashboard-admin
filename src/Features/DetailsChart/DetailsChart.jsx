import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { generateChartData } from "../../Utils/Home";
import CustomTooltip from "./Components/CustomTooltip";

function DetailsChart() {
  const data = generateChartData({
    productLength: 4,
    usersLength: 12,
    ticketsLength: 87,
    adminsLength: 3,
  });
  return (
    <div className=" bg-white border primary-border-color p-5 rounded-2xl">
      <span className="text-lg">آمار کلی داشبورد</span>
      <div className="w-full h-100 mt-5">
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="value" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={CustomTooltip} />
            <CartesianGrid strokeDasharray="3 3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DetailsChart;
