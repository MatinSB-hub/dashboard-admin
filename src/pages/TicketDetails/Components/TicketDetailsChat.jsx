import { useEffect, useState } from "react";

function TicketDetailsChat({ ticketChat }) {
  return (
    <div className="max-w-[70%] min-w-[70%] min-h-[20%] h-95 flex flex-col gap-5 primary-border-color bg-white rounded-lg select-none border shadow-sm py-[23.5px] px-8 overflow-y-scroll">
      {ticketChat.map((message, i) =>
        message.Sender === "USER" ? (
          <div className="flex justify-start items-center" key={i}>
            <div className="max-w-[70%] max-h-max bg-gradient-to-b from-[#3476ef] to-[#2757b1] text-white rounded-3xl rounded-br-sm p-5">
              {message.Messahe}
            </div>
          </div>
        ) : (
          <div className="flex justify-end items-center" key={i}>
            <div className="max-w-[70%] max-h-max bg-gradient-to-b from-[#22b96d] to-50% to-[#18814d] text-white rounded-3xl rounded-bl-sm p-5">
              {message.Messahe}
            </div>
          </div>
        ),
      )}
    </div>
  );
}

export default TicketDetailsChat;
