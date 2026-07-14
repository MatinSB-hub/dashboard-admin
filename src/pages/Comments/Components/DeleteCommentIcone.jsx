import React from "react";
import Modal from "../../../Components/Common/Modal/Modal";

function DeleteCommentIcone({ onSubmit }) {
  return (
    <button className="custom-button bg-red-500" onClick={onSubmit}>
      حذف کامنت
    </button>
  );
}

export default DeleteCommentIcone;
