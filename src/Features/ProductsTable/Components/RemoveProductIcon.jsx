import React from "react";
import Modal from "../../../Components/Common/Modal/Modal";
import { HiTrash } from "react-icons/hi";

function RemoveProductIcon({ product, onSubmit }) {
  const Trigger = () => (
    <button className="cursor-pointer">
      <HiTrash className="text-red-500" />
    </button>
  );
  return (
    <Modal
      title="حذف محصول"
      Trigger={<Trigger />}
      product={product}
      onSubmit={() => onSubmit(product.id)}
    >
      <div className="flex-center">
        آیا از حذف محصول
        <kbd className="px-2 py-1 rounded-md bg-red-500/15 font-black text-red-500"> {product.title} </kbd>
        اطمینان دارید؟
      </div>
    </Modal>
  );
}

export default RemoveProductIcon;
