// در اینجا مقدار پیشفرض prop CustomButtons برار یک تابع خالی قرار گرفت تا در صورت مقداردهی نشدن آن ارور ایجاد نشود
function ModalFooter({ onSubmit, onClose, CustomButtons = () => {} }) {
  const SubmitHandler = () => {
    onClose();
    onSubmit();
  };

  return (
    <div className="w-full flex justify-end items-center text-sm text-[#666D80] select-none  gap-2">
      {typeof onSubmit === "function" ? (
        <>
          <button
            onClick={onClose}
            className="flex items-center gap-1 cursor-pointer bg-white px-4 py-2 rounded-lg border primary-border-color"
          >
            <span>انصراف</span>
          </button>
          <button
            onClick={SubmitHandler}
            className="flex items-center gap-1 cursor-pointer primary-bg px-4 py-2 rounded-lg border primary-border-color"
          >
            <span>تایید</span>
          </button>
        </>
      ) : (
        <div className="w-full flex justify-between">
          <button
            onClick={onClose}
            className="flex items-center gap-1 cursor-pointer bg-yellow-400 text-yellow-800 px-4 py-2 rounded-lg border primary-border-color"
          >
            <span>انصراف</span>
          </button>
          {<CustomButtons />}
          {/* {typeof CustomButtons === "function" &&<CustomButtons/>} */}
        </div>
      )}
    </div>
  );
}

export default ModalFooter;
