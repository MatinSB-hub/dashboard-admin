import { createBrowserRouter, Link, Outlet } from "react-router";
import Home from "./pages/Home/page";
import Products from "./pages/Products/page";
import Comments from "./pages/Comments/page";
import Tickets from "./pages/Tickets/page";
import TicketDetails from "./pages/TicketDetails/page";
import Users from "./pages/Users/page";
import DashbordLayouts from "./Components/Layouts/DashbordLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashbordLayouts/>,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "users", element: <Users /> },
      { path: "tickets", element: <Tickets /> },
      { path: "tickets/:ticketId", element: <TicketDetails /> },
      { path: "comments", element: <Comments /> },
    ],
  },
]);

export default router;
