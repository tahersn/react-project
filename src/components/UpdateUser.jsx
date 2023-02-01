import React from "react";
import { useState } from "react";

function UpdateUser({ users, setUsers }) {
  const [user, setUser] = useState({ name: "", email });
  return <div>UpdateUser</div>;
}

export default UpdateUser;
