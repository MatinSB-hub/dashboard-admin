import { FiEdit } from "react-icons/fi";
import Modal from "../../../Components/Common/Modal/Modal";
// import CommentActions from "./CommentActions";
import clsx from "clsx";
import { useState } from "react";

function EditCommentButton({
  comment,
  CustomButtons,
  ChangeCommentPublishedHandler,
}) {
  // const commentButtons = () =>{
  //   return <div className="flex gap-2">
  //     <button className="custom-button bg-red-500">حذف کامنت</button>
  //     <button className="custom-button bg-blue-500">مخفی سازی</button>
  //     <button className="custom-button bg-green-700">ذخیره تغیرات</button>
  //   </div>
  // }
  const [message, setMessage] = useState(comment.message);
  return (
    <Modal
      Trigger={
        <div className="w-52 link-text flex justify-between">
          <span>{comment.message.slice(0, 25)}</span>
          <FiEdit />
        </div>
      }
      title="مدیریت نظر"
      CustomButtons={() =>
        CustomButtons(comment.id, message, comment.isPublished)
      }
    >
      <div className="flex flex-col gap-5">
        <div>
          <label className="text-[#666D80]">محتوای نظر</label>
          <textarea
            value={message}
            className="block resize-none mt-2 text-sm min-h-22.5 px-3 rounded-md bg-gradient-to-t from-zinc-200/70 shadow placeholder:text-sm border outline-none primary-border-color w-full"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          >
            {/* {comment.message} */}
          </textarea>
        </div>
        <div className="flex gap-2">
          <label className="text-[#666D80]">وضعیت انتشار</label>

          {/* //////////////////////////////////////////////////////////////////////////////////// */}
          <div
            className={clsx(
              comment.isPublished ? " bg-blue-700" : " bg-gray-400",
              "w-10 h-5 flex flex-start items-center px-0.5 rounded-full transition-color",
            )}
            onClick={() => ChangeCommentPublishedHandler(comment.id)}
          >
            <div
              className={clsx(
                comment.isPublished ? "-translate-x-5" : "",
                " w-4 h-4 bg-white rounded-full transition-all",
              )}
            ></div>
          </div>
          {/* //////////////////////////////////////////////////////////////////////////////////// */}

          <span
            className={clsx(
              comment.isPublished === true ? "success-badge" : "hiden-badge",
              "badge",
            )}
          >
            {comment.isPublished === true ? "درج شده" : "پنهان شده"}
          </span>
        </div>
      </div>
    </Modal>
  );
}

export default EditCommentButton;
