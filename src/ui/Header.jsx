import { useNavigate } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import { Button } from "antd";
import { logout } from "../services/authApi";
import getUserIdRole from "../utils/getUserIdRole";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const {role} = getUserIdRole()
  return (
    <div className="dark:bg-slate-800 dark:text-slate-100 bg-slate-100 text-slate-800 p-4 flex justify-around">
      <div className="flex gap-6 items-center">
        <h1 className="text-xl">Employee Management Dashboard</h1>
      </div>
      <div className="flex gap-6 items-center">
        <h2>{role}</h2>
        <ThemeButton />
        <Button className="dark:text-slate-100" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Header;
