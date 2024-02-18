import useGetAttendance from "../features/attendance/useGetAttendance";
import useUpdateAttendance from "../features/attendance/useUpdateAttendance";
// import Button from "../ui/Button";
import useCreateAttendance from "../features/attendance/useCreateAttendance";
// import DashboardCard from "../ui/DashboardCard";
// import ListItem from "../ui/ListItem";
// import AdminDashboard from "./AdminDashboard";
// import Table from "../ui/Table";
import useGetCurrentUser from "../features/users/useGetCurrentUser";
import Table from "../ui/Table";
import { Button, Card } from "antd";
// import { LoaderMini } from "../ui/LoaderMini";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { data: employeesAttendance, isPending: tableLoading } =
    useGetAttendance(user?.id);
  const { updateAttendance, isPending: updateLoading } = useUpdateAttendance();
  const { createAttendance, isPending: attendanceLoading } =
    useCreateAttendance();
    console.log(employeesAttendance)

  const { user: userData, isPending } = useGetCurrentUser(user?.id);
  console.log(userData);

  const checkIsToday = (employeesAttendance) => {
    const todayDate = new Date().toISOString().split("T")[0];
    console.log(todayDate);

    const checkIsToday = employeesAttendance?.data?.attendance.filter(
      (obj) => {
        console.log(obj.date.split("T")[0])
        return obj.date.split("T")[0] === todayDate
      }
    );
    return checkIsToday;
  };

  const handleAttendanceLogin = () => {
    console.log(checkIsToday(employeesAttendance));
    const time = new Date().toISOString();
    if (!checkIsToday(employeesAttendance)?.length) {
      createAttendance({ user: user?.id, time, timeTag: "login" });
    }
  };
  const handleAttendanceLogout = () => {
    const time = new Date().toISOString();
    if (checkIsToday(employeesAttendance)?.length) {
      updateAttendance({ user: user?.id, time, timeTag: "logout" });
    }
  };

  console.log(tableLoading);

  return (
    <>
      <div className="p-4 w-full flex flex-col gap-4">
        <Card title="Profile">
          <div className="w-full rounded-lg text-lg">
            {isPending && <p>Loading...</p>}
            <div className="flex justify-between">
              <div className="flex-1">
                <h2>
                  <span className="text-slate-500">Name: </span>
                  {`${userData?.data?.user?.firstName} ${userData?.data?.user?.firstName}`}
                </h2>
                <h2>
                  <span className="text-slate-500">Email: </span>
                  {userData?.data?.user?.email}
                </h2>
                <h2>
                  <span className="text-slate-500">Employee Id: </span>
                  {userData?.data?.user?.employeeId}
                </h2>
                <h2>
                  <span className="text-slate-500">Reporting Manager: </span>
                  {userData?.data?.user?.reportingManager}
                </h2>
                <h2>
                  <span className="text-slate-500">Team Lead: </span>
                  {userData?.data?.user?.teamLead}
                </h2>
              </div>
              <div className="flex gap-4 flex-1">
                <Button
                  onClick={handleAttendanceLogin}
                  disabled={
                    attendanceLoading ||
                    employeesAttendance?.data?.attendanceForDay?.loginTime
                  }
                >
                  Check In
                </Button>
                <Button
                  onClick={handleAttendanceLogout}
                  disabled={
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
        </Card>
        {/* <div className="w-full grid md:grid-cols-3 gap-4 h-56">
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
          </div> */}
        <div className="w-full text-slate-800 h-56 rounded-lg">
          {tableLoading && <h1>Loading...</h1>}
          <Table data={employeesAttendance} />
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Dashboard;
