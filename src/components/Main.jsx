import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100%-5rem)]">
        <Outlet />
      </div>
    </>
  );
};

export default Main;
