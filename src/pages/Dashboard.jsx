import withAuth from "../store/withAuth";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";

const AuthenticatedAdminDashboard = withAuth(AdminDashboard, ["admin"]);

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;

  return (
    <>
      {role === "admin" ? <AuthenticatedAdminDashboard /> : <UserDashboard />}
    </>
  );
};

export default Dashboard;
