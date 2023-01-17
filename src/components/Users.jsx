import { useRef } from "react";
const Users = () => {
  return <UsersDisplay />;
};
//users table
const users = [
  { name: "taher", age: 23, email: "taher@kedhe.tn" },
  { name: "taher", age: 23, email: "taher@kedhe.tn" },
];

const UsersDisplay = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Old</th>
            <th>email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((User, i) => {
            <tr>
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
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold"> {User.name} </div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>{User.email}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Users;
