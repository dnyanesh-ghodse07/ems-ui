import { useNavigate } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import { Button } from "antd";
import { logout } from "../services/authApi";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout()
    navigate("/login")
  };

  return (
    <div className="dark:bg-slate-800 dark:text-slate-100 bg-slate-100 text-slate-800 p-4 flex justify-around">
      <h1>Header</h1>
      <ThemeButton />
      <Button className="dark:text-slate-100" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Header;
