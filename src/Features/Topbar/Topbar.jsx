import SearchInput from "./components/SearchInput";
import Notification from "./components/Notification";
import Divider from "./components/Divider";
import Profile from "./components/Profile";

function Topbar() {
  return (
    <div className="flex w-full h-22 justify-between items-center *:flex *:items-center *:gap-3 border-b-2 primary-border-color z-11">
      <div>
        <SearchInput />
      </div>
      <div>
        <Notification />
        <Divider />
        <Profile />
      </div>
    </div>
  );
}

export default Topbar;
