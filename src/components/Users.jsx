import { useState } from "react";
import ModalAdd from "./modalAdd";
import UsersTable from "./UsersTable";

const Users = () => {
  const [users, setUsers] = useState([
    { name: "taher", age: 23, email: "taher@kedhe.tn" },
    { name: "taher2", age: 24, email: "taher2@kedhe.tn" },
    { name: "aaaaaaa2", age: 21, email: "taher2@kedhe.tn" },
  ]);

  const [ShowAdd, SetShowAdd] = useState(false);

  const [search, setSearch] = useState("");

  function filtredUsers() {
    if (search === "") {
      return users;
    }
    return users.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <>
      <div className="flex row justify-between">
        <div className="m-4">
          <input
            type="text"
            className="bg-gray-700 outline-none rounded-md h-11 w-60 pl-3 pr-3 text-gray-300"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            onClick={() => SetShowAdd(!ShowAdd)}
            className="btn btn-info btn-md m-4"
          >
            Add user
          </button>
        </div>
      </div>
      {ShowAdd && (
        <ModalAdd
          users={users}
          setUsers={setUsers}
          CloseAdd={() => SetShowAdd(false)}
        />
      )}
      <UsersTable users={filtredUsers()} setUsers={setUsers} />
    </>
  );
};

//users table

export default Users;
