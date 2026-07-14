import { HiEye } from "react-icons/hi";
import Modal from "../../../Components/Common/Modal/Modal";
import clsx from "clsx";

function ChangeVisibilityIcon({ product, onSubmit }) {
  const Trigger = () => (
    <button>
      <HiEye className="text-sky-500" />
    </button>
  );
  return (
    <Modal
      title="تغییر وضعیت محصول"
      Trigger={<Trigger />}
      onSubmit={() => onSubmit(product.id)}
    >
      <div className="flex-center">
        آیا از
        <span
          className={clsx(
            product.isPublished ? "danger-badge" : "success-badge",
            "badge mx-1",
          )}
        >
          {product.isPublished ? "خصوصی" : "عمومی"}
        </span>
        کردن محصول
        <span className="m-1 font-bold">{product.title}</span>
        اطمینان دارید؟
      </div>
    </Modal>
  );
}

export default ChangeVisibilityIcon;
