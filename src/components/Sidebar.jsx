import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Sidebar = () => {
  return (
    <div className="w-56 bg-black flex flex-col h-full">
      <div className="m-5 flex items-center h-50 flex-col flex-grow-0 w-full">
        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="font-serif font-extrabold text-orange-500 ">
          <h1>John Doe</h1>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-9">
        <tr>
          <td>
            <AccountBalanceIcon sx={{ fontSize: 40 }} />
          </td>
          <td className="text-white">Home</td>
        </tr>
      </div>
    </div>
  );
};
export default Sidebar;
