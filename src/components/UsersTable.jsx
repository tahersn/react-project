import React from "react";
import { useState } from "react";

const UsersTable = (props) => {
  const { users, setUsers } = props;

  function deleteUser(index) {
    setUsers(users.filter((u, i) => i !== index));
  }

  function UpdateUser(index) {}

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead className="text-black">
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>email</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="text-black">
          {users.map((user, i) => (
            <tr key={i}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="./assets/panda.jpg"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                {user.email}
                <br />
              </td>
              <td>{user.age}</td>
              <th>
                <button
                  onClick={() => deleteUser(i)}
                  className="btn btn-ghost btn-xs"
                >
                  delete
                </button>
                <button
                  onClick={() => UpdateUser(i)}
                  className="btn btn-ghost btn-xs"
                >
                  Update
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
