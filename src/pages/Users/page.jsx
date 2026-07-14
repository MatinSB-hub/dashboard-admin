import users from "../../data/Users";
import { usersTitle } from "../../data/Users";
import SectionTitle from "../../Components/Common/SectionTitle";
import Table from "../../Components/Common/Table/Table";
import TableHead from "../../Components/Common/Table/Elements/TableHead";
import TableHeadCell from "../../Components/Common/Table/Elements/TableHeadCell";
import TableBody from "../../Components/Common/Table/Elements/TableBody";
import TableCell from "../../Components/Common/Table/Elements/TableCell";
import TableRow from "../../Components/Common/Table/Elements/TableRow";
import clsx from "clsx";
import { useCallback, useState } from "react";
import DeleteUsersIcon from "../../Features/ProductsTable/Components/DeleteUsersIcon";
import EditProductIcon from "../../Features/ProductsTable/Components/EditProductIcon";
import UsersPageButtons from "./Components/UsersPageButtons";
import useAddProduct from "../../Hooks/useAddProduct";
import { userRoles } from "../../data/Users";
import useTitle from "../../Hooks/useTitle";

const Users = function Users() {
  useTitle("کابران");

  const [allUsers, setAllUsers] = useState(users);
  const [newUser, setNewUser] = useState({
    id: crypto.randomUUID(),
    userName: "",
    fullName: "",
    phoneNumber: "",
    email: "",
    role: userRoles[0],
    profile: "/images/profile-avatar.jpg",
  });
  const [paginatedUsers, setPaginatedUsers] = useState([]);

  const deleteUserHandler = (id) => {
    const newUsers = [...allUsers].filter((user) => user.id !== id);
    setAllUsers(newUsers);
  };

  const addUserHandler = useCallback(() => {
    const resetDataStructure = {
      id: crypto.randomUUID(),
      userName: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      role: userRoles[0],
      profile: "/images/profile-avatar.jpg",
    };
    useAddProduct(
      newUser,
      setNewUser,
      resetDataStructure,
      allUsers,
      setAllUsers,
    );
  }, [newUser]);
  return (
    <>
      <SectionTitle title="کاربران وبسایت" />
      <Table
        header={{
          title: `مدیریت کاربران (${allUsers.length.toLocaleString("fa-IR")} کاربر)`,
          Buttons: (
            <UsersPageButtons
              newUser={newUser}
              setNewUser={setNewUser}
              onSubmit={addUserHandler}
            />
          ),
        }}
        pagination={{
          items: allUsers,
          setItems: setPaginatedUsers,
          itemsPerPage: 6,
        }}
      >
        <TableHead>
          {usersTitle.map((title) => (
            <TableHeadCell key={title}>{title}</TableHeadCell>
          ))}
        </TableHead>
        <TableBody>
          {paginatedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id.slice(0, 10)}...</TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.userName}</TableCell>
              <TableCell className="overflow-hidden link-text">
                {user.email}
              </TableCell>
              <TableCell className="link-text">{user.phoneNumber}</TableCell>
              <TableCell>
                <span
                  className={clsx(
                    user.role.value === "ADMIN"
                      ? "admin-badge"
                      : user.role.value === "USER"
                        ? "user-badge"
                        : "support-badge",
                    "badge",
                  )}
                >
                  {user.role.label}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <DeleteUsersIcon
                    user={user}
                    onSubmit={() => deleteUserHandler(user.id)}
                  />
                  <EditProductIcon />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Users;
