import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

function MessageInput({ onSubmit }) {
  const [inputText, setInputText] = useState("");
  const submitHandler = () => {
    onSubmit(inputText);
    setInputText("");
  };

  const enterkeyHandler = (e) => {
    if (e.code === "Enter") submitHandler();
  };

  return (
    <div className="max-w-[70%] min-w-[70%] h-max flex justify-between items-center gap-4 bg-white px-2 py-2 border primary-border-color shadow-sm rounded-4xl">
      <input
        className="w-full h-max mr-5 outline-none"
        type="text"
        placeholder="لطفا پیغام خود را وارد نمائید..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => enterkeyHandler(e)}
      />
      <div
        className="w-9 h-9 flex-center bg-gradient-to-b from-[#3476ef] to-[#2757b1] rounded-full cursor-pointer active:scale-95"
        onClick={submitHandler}
      >
        <FiSend className="text-white" /> 
      </div>
    </div>
  );
}

export default MessageInput;
