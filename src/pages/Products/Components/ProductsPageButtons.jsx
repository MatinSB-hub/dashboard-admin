import { CiGrid41, CiViewTable } from "react-icons/ci";
import Modal from "../../../Components/Common/Modal/Modal";
import AddModalFields from "../../../Features/ProductsTable/Components/AddModalFields";
import React from "react";

function ProductsPageButtons({
  toggleLayout,
  layoutType,
  newProduct,
  setNewProduct,
  addProductHandler,
}) {
  const fields = [
    { lable: "عنوان محصول", key: "title", type: "text" },
    { lable: "وضعیت انتشار", key: "isPublished", type: "select" },
    { lable: "وضعیت موجودی", key: "entity", type: "number" },
    { lable: "قیمت محصول", key: "price", type: "number" },
    { lable: "توضیحات محصول", key: "description", type: "textarea" },
  ];
  return (
    <>
      <button
        className="text-2xl size-10 flex-center bg-[#ECEFF3] text-[#818898] *:stroke-1 rounded-md hover:bg-[#e1e4e7] active:scale-90 active:bg-[#ECEFF3]  duration-150 transition-all primary-border-color border cursor-pointer shadow"
        onClick={toggleLayout}
      >
        {layoutType === "table" ? <CiGrid41 /> : <CiViewTable />}
      </button>
      {/* <button className="primary-bg px-3 py-1.5">ایجاد محصول</button> */}
      <Modal
        title="ایجاد محصول"
        Trigger={
          <button className="primary-bg px-3 py-1.5">ایجاد محصول</button>
        }
        onSubmit={addProductHandler}
      >
        <AddModalFields
          newData={newProduct}
          onChange={setNewProduct}
          fields={fields}
        />
      </Modal>
    </>
  );
}

export default ProductsPageButtons;
