import SummariesCard from "./Components/SummariesCard";
import { generateSummaries } from "../../Utils/Home";

function Summaries() {
  const summaries = generateSummaries({
  productLength : 4,
  usersLength : 12,
  ticketsLength : 87,
  adminsLength : 3,
});
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-6">
      {summaries.map((summary) => (
        <SummariesCard key={summary.id} {...summary} />
      ))}
    </div>
  );
}

export default Summaries;
