import { useParams } from "react-router";
import TicketDetailsHeader from "./Components/TicketDetailsHeader";
import TicketDetailsChat from "./Components/TicketDetailsChat";
import { useEffect, useState } from "react";
import { UsersTickets } from "../../data/Tickets";
import MessageInput from "./Components/MessageInput";
import useTitle from "../../Hooks/useTitle";
function TicketDetails() {
  useTitle("جزئیات تیکت");

  const { ticketId } = useParams();

  const [ticketChat, setTicketChat] = useState([]);

  useEffect(() => {
    getTicketMessage();
  }, []);

  const sendAnswerMessage = (answer) => {
    if (answer) {
      const text = { Sender: "SUPPORT", Messahe: answer };
      setTicketChat([...ticketChat, text]);
    }
  };

  const getTicketMessage = () => {
    const message = UsersTickets.find((ticket) => ticket.id === ticketId);
    setTicketChat(message.ticketMessages);
    // console.log(typeof message.ticketMessages)
    // console.log(message.ticketMessages);
    // console.log(typeof(message.ticketMessages));
  };

  return (
    <div className="flex-center flex-col gap-4">
      <TicketDetailsHeader
        userFullName={"علی محمدی"}
        UserTitle={"مشکل در ثبت شفارش"}
        closeBtnNavigateTo={"/tickets"}
      />

      <TicketDetailsChat ticketChat={ticketChat} />
      <MessageInput onSubmit={sendAnswerMessage} />
    </div>
  );
}

export default TicketDetails;
