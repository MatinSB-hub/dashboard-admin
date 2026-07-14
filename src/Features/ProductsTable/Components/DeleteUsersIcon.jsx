import React, { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Modal from "../../../Components/Common/Modal/Modal";
import clsx from "clsx";

function DeleteUsersIcon({ user, onSubmit }) {
  const Trigger = () => {
    return (
      <button>
        <FaRegTrashCan className="text-red-600" />
      </button>
    );
  };
  return (
    <Modal title="حذف کاربر" Trigger={<Trigger />} onSubmit={onSubmit}>
      <p>
        آیا از حذف کاربر
        <span className="px-2 py-1 mx-2 my-5 rounded-md bg-red-500/15 font-black text-red-500">{user.fullName}</span>
        {" "}
        با نام کاربری
        <span className="px-2 py-1 mx-2 my-5 rounded-md bg-red-500/15 font-black text-red-500">{user.userName}</span>
        و ارشدیت
        {" "}
        <span className="px-2 underline">{user.role.label}</span>
        {" "}
        اطمینان دارید؟
      </p>
    </Modal>
  );
}

export default DeleteUsersIcon;
