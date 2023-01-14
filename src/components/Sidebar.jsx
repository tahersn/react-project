import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HomeIcon from "@mui/icons-material/Home";

const Sidebar = () => {
  return (
    <div className="w-56 bg-black flex flex-col h-full">
      <div className="my-5 flex items-center h-50 flex-col flex-grow-0 w-full">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="font-serif font-extrabold text-orange-500 ">
          <h1>John Doe</h1>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-9 ">
        <tr className="w-full flex items-center justify-center rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          <td>
            <HomeIcon sx={{ fontSize: 40 }} />
          </td>
          <td className="text-white font-bold px-3">Home</td>
        </tr>
        <tr className="w-full flex  items-center justify-center rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 z-1">
          <td>
            <AccountBalanceIcon sx={{ fontSize: 40 }} />
          </td>
          <td className="text-white font-bold px-3">Users</td>
        </tr>
      </div>
    </div>
  );
};
export default Sidebar;
