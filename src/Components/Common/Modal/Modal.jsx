import { clsx } from "clsx";
import React, { useState } from "react";
import ModalFooter from "./ModalFooter";
import { BiX } from "react-icons/bi";
import useToggle from "../../../hooks/useToggle";

const Modal = React.memo(function Modal({
  Trigger,
  title,
  children,
  onSubmit,
  CustomButtons,
}) {
  const [modalState, toggleModalState] = useToggle(false);

  return (
    <>
      <div
        className="flex min-w-max min-h-max cursor-pointer"
        onClick={toggleModalState}
      >
        {Trigger}
      </div>
      {/* {isOpen && ( */}
      {/* در اینجا از رویداد onMouseDown استفاده شد تا هرموقع خارج از modal موس
      فشرده شد مودال بسته بشه از onClick استفاده نشد چون اگر درون مودال کلیک
      میشد و خارج از آن رها میشد بازم مودال بسته میشد و موقع سلکت کردن متن مشکل
      ساز میشد */}
      <div
        id="modal-screen"
        className={clsx(
          "w-dvw h-dvh right-0 top-0 fixed z-10 bg-black/30 flex-center duration-300",
          modalState ? "" : "invisible opacity-0",
        )}
        onMouseDown={toggleModalState}
      >
        {/* در اینجا از stopPropagation استفاده شد تا از مشکلات ناشی از bubbling جلوگیری شود */}
        <div
          onMouseDown={(e) => {
            e.stopPropagation();
          }}
          className="w-125 rounded-lg overflow-hidden bg-white drop-shadow-2xl/30 max-h-[90dvh] overflow-y-auto"
        >
          <div className="flex items-center justify-between px-4 h-16">
            <span className="text-[17px] text-zinc-800 font-bold">{title}</span>
            <button
              onClick={toggleModalState}
              className="text-2xl! text-zinc-500 cursor-pointer"
            >
              <BiX />
            </button>
          </div>
          <div
            id="modal-content"
            className="p-4 py-5 border-y primary-border-color"
          >
            {children}
          </div>

          <div className="min-h-14 flex items-center justify-end gap-2 px-4 bg-[#F6F8FA]">
            <ModalFooter
              onSubmit={onSubmit}
              onClose={toggleModalState}
              CustomButtons={CustomButtons}
            />
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
});

export default Modal;
