import SectionTitle from "../../../Components/Common/SectionTitle";
import users from "../../../data/Users";
import OpenInPage from "./OpenInPage";
import UserCard from "./UserCard";
function LastUsers() {
  return (
    <div className="col-span-2 max-h-max">
      <SectionTitle title="اخرین کاربران" />
      <div className="space-y-3 mt-3">
        {users.slice(-5).map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      {/* <OpenInPage itemsLength={users.length} navigateTo="/users" /> */}
    </div>
  );
}

export default LastUsers;
