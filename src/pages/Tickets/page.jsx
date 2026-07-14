import clsx from "clsx";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import SectionTitle from "../../Components/Common/SectionTitle";
import Table from "../../Components/Common/Table/Table";
import TableHead from "../../Components/Common/Table/Elements/TableHead";
import TableHeadCell from "../../Components/Common/Table/Elements/TableHeadCell";
import TableBody from "../../Components/Common/Table/Elements/TableBody";
import TableRow from "../../Components/Common/Table/Elements/TableRow";
import TableCell from "../../Components/Common/Table/Elements/TableCell";
import { TicketsTableHeadRow } from "../../data/Tickets";
import { UsersTickets } from "../../data/Tickets";
import { FiBox } from "react-icons/fi";
import useTitle from "../../Hooks/useTitle";
function Tickets() {
  useTitle("تیکت ها");

  const [allTickets, setAllTickets] = useState(UsersTickets);
  const [paginatedTickets, setPaginatedTickets] = useState([]);
  return (
    <>
      <SectionTitle title="مدیریت تیکت" />
      <Table
        header={{ title: "تیکت ها" }}
        pagination={{
          items: allTickets,
          setItems: setPaginatedTickets,
          itemsPerPage: 3,
        }}
      >
        <TableHead>
          {TicketsTableHeadRow.map((head) => (
            <TableHeadCell key={head}>{head}</TableHeadCell>
          ))}
        </TableHead>
        <TableBody>
          {paginatedTickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.id.slice(0, 10)}...</TableCell>
              <TableCell>{ticket.userFullName}</TableCell>
              <TableCell>{ticket.ticketTitle}</TableCell>
              <TableCell>
                <div
                  className={clsx(
                    ticket.ticketState ? "success-badge" : "danger-badge",
                    "badge",
                  )}
                >
                  {ticket.ticketState ? "پاسخ داده شده" : "در انتظار پاسخ"}
                </div>
              </TableCell>
              <TableCell>{ticket.dateCreated}</TableCell>
              {/* <TableCell>{ticket.ticketMessages}</TableCell> */}
              <TableCell>
                <Link to={`/tickets/${ticket.id}`}>
                  <p className="flex-center gap-2 link-text">
                    <FiBox />
                    <span>مشاهده پیغام </span>
                  </p>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Tickets;
