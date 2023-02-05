import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ModalAdd = ({ CloseAdd, users, setUsers }) => {
  var [user, setUser] = useState({ name: "", email: "", age: "" });
  const handleClick = () => {
    CloseAdd();
  };

  function logUser() {
    setUsers([...users, user]);
    CloseAdd();
  }

  return (
    <div className="p-8 z-10 absolute flex flex-col justify-center left-[50%] bg-gray-400  rounded-md mt-5  ">
      <div>
        <label htmlFor="name">Id :</label>
        <input
          className="name bg-gray-300 h-11 relative border-0 rounded-md outline-none focus:outline-none focus:ring w-full pl-3 pr-3 text-black"
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={(e) => {
            console.log(user);
            setUser({ ...user, id: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="name">Name :</label>
        <input
          className="name bg-gray-300 h-11 relative border-0 rounded-md outline-none focus:outline-none focus:ring w-full pl-3 pr-3 text-black"
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={(e) => {
            console.log(user);
            setUser({ ...user, name: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="email">email :</label>
        <input
          className="email bg-gray-300 h-11 relative border-0 rounded-md outline-none focus:outline-none focus:ring w-full pl-3 pr-3 text-black"
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </div>
      <div>
        <label htmlFor="age">Age :</label>
        <input
          className="age bg-gray-300 h-11 relative border-0 rounded-md outline-none focus:outline-none focus:ring w-full pl-3 pr-3 text-black"
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={(e) => {
            setUser({ ...user, age: e.target.value });
          }}
        />
      </div>
      <button
        className="btn btn-primary mt-4"
        onClick={() => logUser()}
        type="submit"
      >
        Submit
      </button>
      <button className="btn btn-danger mt-4" onClick={() => handleClick(user)}>
        Close
      </button>
    </div>
  );
};

export default ModalAdd;
