import clsx from "clsx";
import React from "react";

function ChangeCommentPublishedIcon({ onSubmit, isPublishedValue }) {
  return (
    <button
      className={clsx(
        isPublishedValue && "bg-gray-400",
        "custom-button bg-blue-500",
      )}
      onClick={onSubmit}
    >
      {isPublishedValue ? "مخفی کردن" : "منتشر کردن"}
    </button>
  );
}

export default ChangeCommentPublishedIcon;
