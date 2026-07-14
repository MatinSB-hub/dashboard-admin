import { FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router";

function TicketDetailsHeader({ userFullName, UserTitle, closeBtnNavigateTo }) {
  return (
    <div className="min-w-[70%] flex justify-between items-center primary-border-color bg-white rounded-lg select-none border shadow-sm py-3.5 px-8 ">
      <div className="flex items-center gap-3">
        <div className="w-15 h-15 rounded-full bg-gradient-to-l from-[#114dc5] to-[#008b0c]"></div>
        <div className="flex flex-col">
          <span className="text-[20px] font-bold">{userFullName}</span>
          <span className="text-gray-500">{UserTitle}</span>
          <span className="text-blue-600">آنلاین</span>
        </div>
      </div>
      <Link to={closeBtnNavigateTo}>
        <div className="w-10 h-10 flex-center border border-gray-400 rounded-full hover:bg-gray-100 hover:rotate-90 transition-all duration-300 delay-75">
          <FiX />
        </div>
      </Link>
    </div>
  );
}

export default TicketDetailsHeader;
