import React from "react";

const ModalAdd = ({ CloseAdd }) => {
  const handleClick = () => {
    CloseAdd();
  };
  return (
    <div className="p-8 z-10 absolute flex flex-col justify-center left-[50%] bg-gray-400  rounded-md mt-5  ">
      <div>
        <label htmlFor="name">Name :</label>
        <input
          className="name bg-gray-300 h-11 relative border-0 rounded-md outline-none focus:outline-none focus:ring w-full pl-3 pr-3 text-black"
          id="standard-basic"
          label="Standard"
          variant="standard"
        />
      </div>
      <div>
        <label htmlFor="email">email :</label>
        <input
          className="email bg-gray-300 h-11 relative border-0 rounded-md outline-none focus:outline-none focus:ring w-full pl-3 pr-3 text-black"
          id="standard-basic"
          label="Standard"
          variant="standard"
        />
      </div>
      <div>
        <label htmlFor="age">Age :</label>
        <input
          className="age bg-gray-300 h-11 relative border-0 rounded-md outline-none focus:outline-none focus:ring w-full pl-3 pr-3 text-black"
          id="standard-basic"
          label="Standard"
          variant="standard"
        />
      </div>
      <button className="btn btn-primary mt-4">Submit</button>
      <button className="btn btn-danger mt-4" onClick={() => handleClick()}>
        Close
      </button>
    </div>
  );
};

export default ModalAdd;
