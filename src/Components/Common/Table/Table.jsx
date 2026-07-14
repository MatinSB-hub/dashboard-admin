import Pagination from "../Pagination";
import TableHeader from "./Elements/TableHeader";

function Table({
  header = {
    title: "لیست آیتم ها",
    Buttons: undefined,
    setFilter: undefined,
    filterType:"all",
  },
  pagination = { items: null, setItems: null, itemsPerPage: null },
  children,
}) {
  return (
    <div className="mt-10 border bg-white min-w-full primary-border-color rounded-2xl overflow-hidden">
      <TableHeader header={header} />
      <div>{children}</div>

      <Pagination
        items={pagination.items}
        setItems={pagination.setItems}
        itemsPerPage={pagination.itemsPerPage}
      />
    </div>
  );
}

export default Table;
