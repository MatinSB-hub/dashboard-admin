import { Outlet } from "react-router";
import Sidebar from "../../Features/Sidebar/Sidebar";
import Topbar from "../../Features/Topbar/Topbar";
import BackgroundOverlay from "../Common/BackgroundOverlay";

function DashbordLayouts() {
  return (
    <main id="root" className="flex ">
      <BackgroundOverlay />
      <Sidebar />
      <section className="grow *:px-6 z-11">
        <Topbar />
        <div id="content" className="mt-6 container mx-auto">
          <div className="relative z-10">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashbordLayouts;
