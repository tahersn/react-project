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

  return (
    <>
      <div>
        <button
          onClick={() => SetShowAdd(!ShowAdd)}
          className="btn btn-info btn-md m-4"
        >
          Add user
        </button>
      </div>
      {ShowAdd && (
        <ModalAdd
          users={users}
          setUsers={setUsers}
          CloseAdd={() => SetShowAdd(false)}
        />
      )}
      <UsersTable users={users} setUsers={setUsers} />
    </>
  );
};

//users table

export default Users;
