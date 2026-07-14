import React, { use, useEffect, useState } from "react";
import Table from "../../Components/Common/Table/Table";
import TableHead from "../../Components/Common/Table/Elements/TableHead";
import TableHeadCell from "../../Components/Common/Table/Elements/TableHeadCell";
import TableBody from "../../Components/Common/Table/Elements/TableBody";
import TableRow from "../../Components/Common/Table/Elements/TableRow";
import TableCell from "../../Components/Common/Table/Elements/TableCell";
import { productsAllTableHeadRow } from "../../data/Products";
import clsx from "clsx";
import RemoveProductIcon from "../ProductsTable/Components/RemoveProductIcon";
import ChangeVisibilityIcon from "../ProductsTable/Components/ChangeVisibilityIcon";
import EditProductIcon from "../ProductsTable/Components/EditProductIcon";

function ProductsTableView({
  paginatedProducts,
  setPaginatedProducts,
  filteredProducts,
  changeFilterTypeHandler,
  filterType,
}) {
  const removeHandler = (id) => {
    const newProducts = paginatedProducts.filter(
      (product) => product.id !== id,
    );
    setPaginatedProducts(newProducts);
  };

  const changeVisibilityHandler = (id) => {
    const newProducts = paginatedProducts.map((product) =>
      product.id === id
        ? { ...product, isPublished: !product.isPublished }
        : { ...product },
    );
    setPaginatedProducts(newProducts);
  };

  return (
    <Table
      header={{
        titel: "لیست محصولات",
        setFilter: changeFilterTypeHandler,
        filterType: filterType,
      }}
      pagination={{
        items: filteredProducts,
        setItems: setPaginatedProducts,
        itemsPerPage: 4,
      }}
    >
      <TableHead>
        {productsAllTableHeadRow.map((title) => (
          <TableHeadCell key={title}>{title}</TableHeadCell>
        ))}
      </TableHead>
      <TableBody>
        {paginatedProducts.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.id.slice(0, 10)}...</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>
              <img
                src={item.img}
                alt={item.title}
                className="w-35 h-full rounded-xl"
              ></img>
            </TableCell>
            <TableCell>
              <div
                className={clsx(
                  item.isPublished ? "success-badge" : "danger-badge",
                  "badge",
                )}
              >
                {item.isPublished ? "عمومی" : "خصوصی"}
              </div>
            </TableCell>
            <TableCell>{Number(item.price).toLocaleString("fa-IR")}</TableCell>
            <TableCell>{item.entity}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <RemoveProductIcon product={item} onSubmit={removeHandler} />
                <ChangeVisibilityIcon
                  product={item}
                  onSubmit={changeVisibilityHandler}
                />
                <EditProductIcon />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ProductsTableView;
