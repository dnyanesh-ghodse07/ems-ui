import useGetUser from "../features/authentication/useGetUser";
import SidebarButton from "./SidebarButton";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const {user} = useGetUser()
  return (
    <div className="h-full dark:bg-slate-800 dark:text-slate-100 bg-slate-100 text-slate-800 p-4">
      <h1 className="mb-4 text-2xl">Vionsys</h1>
      <div className="flex flex-col gap-2">
        <SidebarButton>
          <Link to="/">Home</Link>
        </SidebarButton>
        <SidebarButton>
          <Link to="/profile">Profile</Link>
        </SidebarButton>
        {user?.role === "admin" && <SidebarButton>
          <Link to="/new-user">New User</Link>
        </SidebarButton>}
      </div>
    </div>
  );
};

export default Sidebar;
