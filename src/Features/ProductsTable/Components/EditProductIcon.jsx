import { BiEdit } from "react-icons/bi";
import Modal from "../../../Components/Common/Modal/Modal";

function EditProductIcon() {
  const Trigger = () => (
    <button>
      <BiEdit className="text-green-500" />
    </button>
  );
  return <Modal title="تغییر جزئیات محصول" Trigger={<Trigger />} />;
}

export default EditProductIcon;
