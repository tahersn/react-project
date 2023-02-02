import { useState } from "react";
import ModalAdd from "./modalAdd";
import UsersTable from "./UsersTable";
import UpdateUser from "./UpdateUser";

const Users = () => {
  const [users, setUsers] = useState([
    { name: "taher", age: 23, email: "taher@kedhe.tn" },
    { name: "taher2", age: 24, email: "taher2@kedhe.tn" },
    { name: "aaaaaaa2", age: 21, email: "taher2@kedhe.tn" },
  ]);

  const [ShowAdd, SetShowAdd] = useState(false);

  const [Showupdate, SetShowUpdate] = useState(false);

  const [search, setSearch] = useState("");

  const [EdUser, SetEdUser] = useState({});

  //search
  function filtredUsers() {
    if (search === "") {
      return users;
    }
    return users.filter((user) => {
      return (
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.age.toString().includes(search) ||
        user.email.toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  //edit user

  var [newUsers, setNewUsers] = useState([]);
  var [prevUser, setPrevUser] = useState({});

  function editUser(u) {
    let i = users.findIndex((user) => user.name === u.name);
    console.log(i);
    console.log(u);
    setUsers((prevUsers) => {
      newUsers = [...prevUsers];
      newUsers[i] = { ...prevUser[i], ...u };
      return newUsers;
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
      {Showupdate && (
        <UpdateUser
          EdUser={EdUser}
          SetEdUser={SetEdUser}
          onUpdateClick={(u) => editUser(u)}
          CloseUpdate={() => SetShowUpdate(false)}
        />
      )}
      <UsersTable
        users={filtredUsers()}
        setUsers={setUsers}
        SetShowUpdate={SetShowUpdate}
        SetEdUser={SetEdUser}
      />
    </>
  );
};

export default Users;
