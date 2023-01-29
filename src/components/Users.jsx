import { useState } from "react";
import ModalAdd from "./modalAdd";
import UsersTable from "./UsersTable";

const Users = () => {
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
      {ShowAdd && <ModalAdd CloseAdd={() => SetShowAdd(false)} />}
      <UsersTable />
    </>
  );
};

//users table

export default Users;
