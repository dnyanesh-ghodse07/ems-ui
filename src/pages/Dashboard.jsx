
import useGetAttendance from "../features/attendance/useGetAttendance";
import useGetUser from "../features/authentication/useGetUser";
import useUpdateAttendance from "../features/attendance/useUpdateAttendance";
import Button from "../ui/Button";
import useCreateAttendance from "../features/attendance/useCreateAttendance";
import DashboardCard from "../ui/DashboardCard";
import ListItem from "../ui/ListItem";
import Table from "../ui/Table";
import AdminDashboard from "./AdminDashboard";
import { getLocalToken } from "../services/authApi";

const Dashboard = () => {
  const { user, isPending } = useGetUser();
  const { data: employeesAttendance, isPending: tableLoading } =
    useGetAttendance();
  const { updateAttendance, isPending: updateLoading } = useUpdateAttendance();
  const { createAttendance, isPending: attendanceLoading } =
    useCreateAttendance();

  const checkIsToday = (employeesAttendance) => {
    const todayDate = new Date().toISOString().split("T")[0];
    const checkIsToday = employeesAttendance?.data?.attendance.filter(
      (obj) => obj.date.split("T")[0] === todayDate
    );
    return checkIsToday;
  };

  const handleAttendanceLogin = () => {
    const userId = getLocalToken();
    console.log(!checkIsToday(employeesAttendance).length)
    const time = new Date().toISOString();
    if (!checkIsToday(employeesAttendance)?.length) {
      createAttendance({ user: userId, time, timeTag: "login" });
    }
  };
  const handleAttendanceLogout = () => {
    const time = new Date().toISOString();
    const userId = getLocalToken();
    if (userId) {
      console.log("Upadate");
      updateAttendance({ time, timeTag: "logout" });
    }
  };

  if(user?.role === "admin"){
    return <AdminDashboard/>
  }

  return (
    <div className="p-4 w-full flex flex-col gap-4">
      <div className="w-full dark:bg-slate-800 dark:text-slate-100 bg-slate-100 text-slate-800 p-4 h-56 rounded-lg">
        <h1 className="text-2xl border-b-4 border-slate-300 pb-2 mb-2">
          Profile
        </h1>
        {isPending && <p>Loading...</p>}
        <div className="flex justify-between">
          <div className="flex-1">
            <h2 className="text-xl">
              <span className="text-slate-500">Name: </span>
              {user?.name}
            </h2>
            <h2 className="text-xl">
              <span className="text-slate-500">Email: </span>
              {user?.email}
            </h2>
          </div>
          <div className="flex gap-4 flex-1">
            <Button
              onClickHandle={handleAttendanceLogin}
              disable={
                attendanceLoading ||
                employeesAttendance?.data?.attendanceForDay?.loginTime
              }
            >
              Check In
            </Button>
            <Button
              onClickHandle={handleAttendanceLogout}
              disable={
                updateLoading ||
                employeesAttendance?.data?.attendanceForDay?.logoutTime
              }
            >
              Check Out
            </Button>
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="20"
              rows="4"
              maxLength={"200px"}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-3 gap-4 h-56">
        <DashboardCard label="Holidays">
          <ul>
            <ListItem>21/12/2024 | Sunday</ListItem>
            <ListItem>21/12/2024 | Tuesday</ListItem>
            <ListItem>21/12/2024 | Thursday</ListItem>
            <ListItem>21/12/2024 | Tuesday</ListItem>
            <ListItem>21/12/2024 | Thursday</ListItem>
          </ul>
        </DashboardCard>
        <DashboardCard label="Task">
          <ul>
            <ListItem>Create a navbar for Project1</ListItem>
            <ListItem>Front End Developer Interview</ListItem>
          </ul>
        </DashboardCard>
        <DashboardCard label="Recent">
          <ul>
            <ListItem>21/12/2024 | Thursday</ListItem>
          </ul>
        </DashboardCard>
      </div>
        <div className="w-full dark:bg-slate-800 dark:text-slate-100 bg-slate-100 text-slate-800 p-4 h-56 rounded-lg">
        {tableLoading && <h1>Loading...</h1>}
        <Table data={employeesAttendance}/>
      </div>
    </div>
  );
};

export default Dashboard;
