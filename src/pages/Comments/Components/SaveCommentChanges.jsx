import React from "react";

function SaveCommentChanges({ onSubmit }) {
  return (
    <button className="custom-button bg-green-700" onClick={onSubmit}>
      ذخیره تغیرات
    </button>
  );
}

export default SaveCommentChanges;
