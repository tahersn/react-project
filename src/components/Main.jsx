import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Main = () => {
  return (
    <>
      <div className="flex h-full">
        <Sidebar />
        <div className="w-[calc(100%-14rem)] h-screen">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Main;
