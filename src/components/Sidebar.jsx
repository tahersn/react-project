import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-primary/60 flex flex-col justify-between sticky top-0 h-screen ">
      <div className="w-56  h-fit top-0 flex flex-col  z-25 ">
        <div className=" flex items-center justify-center h-50 row flex-grow-0 w-full">
          <div className="avatar h-12 w-12 my-3">
            <div className="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="font-sans font-extrabold px-2 text-xl text-orange-500 ">
            Leader Pi
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-9 ">
          <tr className="w-full flex items-center justify-center rounded-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-200">
            <td>
              <HomeIcon sx={{ fontSize: 40 }} />
            </td>
            <td className="text-white font-bold px-3">
              Home
              {/* <span className="badge "> new </span> */}
            </td>
          </tr>
          <tr className="w-full flex  items-center justify-center rounded-sm transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-600 duration-200 ">
            <td>
              <AccountBalanceIcon sx={{ fontSize: 40 }} />
            </td>
            <link className="text-white font-bold px-3" to="/users">
              Users
            </link>
          </tr>
        </div>
      </div>
      <div className="flex pb-2 row justify-center items-center ">
        <div className="dropdown dropdown-top dropdown-hover">
          <label tabIndex={0} className="btn m-1">
            <div className="animate-spin-slow duration-1000 ">
              <SettingsIcon sx={{ fontSize: 40 }} />
            </div>
            Settings
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content  menu p-2 shadow bg-primary-100 rounded-box"
          >
            <li>
              <a>profile</a>
            </li>
            <li>
              <a>security</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
