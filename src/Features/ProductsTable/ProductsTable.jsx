import { Link } from "react-router";
import Table from "../../Components/Common/Table/Table";
import TableHead from "../../Components/Common/Table/Elements/TableHead";
import TableHeadCell from "../../Components/Common/Table/Elements/TableHeadCell";
import TableBody from "../../Components/Common/Table/Elements/TableBody";
import TableCell from "../../Components/Common/Table/Elements/TableCell";
import TableRow from "../../Components/Common/Table/Elements/TableRow";
import { MdOutlineOpenInNew } from "react-icons/md";
import { products, productsTableHeadRow } from "../../data/Products";
import clsx from "clsx";
import RemoveProductIcon from "./Components/RemoveProductIcon";
import ChangeVisibilityIcon from "./Components/ChangeVisibilityIcon";
import EditProductIcon from "./Components/EditProductIcon";
import { useState } from "react";

function ProductsTable() {
  const [productsTable, setProductsTable] = useState(products);

  const Buttons = () => {
    return (
      <Link
        to="products"
        className="flex-center gap-1 underline hover:text-blue-400 text-blue-500 "
      >
        <span>رفتن به صفحه محصولات</span>
        <MdOutlineOpenInNew />
      </Link>
    );
  };

  const removeHandler = (id) => {
    const newProducts = productsTable.filter((product) => product.id !== id);
    setProductsTable(newProducts);
  };

  const changeVisibilityHandler = (id) => {
    const newProducts = productsTable.map((product) =>
      product.id === id
        ? { ...product, isPublished: !product.isPublished }
        : product,
    );
    setProductsTable(newProducts);
  };

  return (
    <Table
      header={{ title: "بخش محصولات", Buttons: <Buttons /> }}
      pagination={{
        items: products,
        setItems: setProductsTable,
        itemsPerPage: 4,
      }}
    >
      <TableHead>
        {productsTableHeadRow.map((colName) => (
          <TableHeadCell key={colName}>{colName}</TableHeadCell>
        ))}
      </TableHead>
      <TableBody>
        {productsTable.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.id.slice(0, 10)}...</TableCell>
            <TableCell>{product.title}</TableCell>
            <TableCell>
              <p
                className={clsx(
                  product.isPublished ? "success-badge" : "danger-badge",
                  "badge",
                )}
              >
                {product.isPublished ? "عمومی" : "خصوصی"}
              </p>
            </TableCell>
            <TableCell>
              <span>{product.price.toLocaleString("fa-IR")} تومان</span>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <RemoveProductIcon product={product} onSubmit={removeHandler} />
                <ChangeVisibilityIcon
                  product={product}
                  onSubmit={changeVisibilityHandler}
                />
                <EditProductIcon product={product} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ProductsTable;
