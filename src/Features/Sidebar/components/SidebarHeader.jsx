import { Link } from "react-router";

function SidebarHeader() {
  return (
    <div className="pb-6 border-b-2 primary-border-color">
      <Link className="flex justify-start items-center gap-4 ">
        <img src="/images/logo.png" alt="error" className="size-10" />
        <span className="text-lg font-black text-zinc-900">سبز لرن</span>
      </Link>
    </div>
  );
}

export default SidebarHeader;
