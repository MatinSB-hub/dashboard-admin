import React from "react";
import Modal from "../../../Components/Common/Modal/Modal";
import AddModalFields from "../../../Features/ProductsTable/Components/AddModalFields";

const UsersPageButtons = React.memo(function UsersPageButtons({
  newUser,
  setNewUser,
  onSubmit,
}) {
  const fields = [
    { lable: "نام کامل", key: "fullName", type: "text" },
    { lable: "نام کاربری", key: "userName", type: "text" },
    { lable: "پست الکترونیکی", key: "email", type: "email" },
    { lable: "شماره موبایل", key: "phoneNumber", type: "number" },
    { lable: "ارشدیت کاربر", key: "role", type: "radio" },
  ];
  console.log("UsersPageButtons rerendered !!!!!");
  return (
    <Modal
      title="ایجاد کاربر"
      Trigger={
        <button className="primary-bg px-3 py-1">ایجاد کاربر جدید</button>
      }
      onSubmit={onSubmit}
    >
      <AddModalFields fields={fields} newData={newUser} onChange={setNewUser} />
    </Modal>
  );
});

export default UsersPageButtons;
