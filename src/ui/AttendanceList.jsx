import { LoaderIcon } from "react-hot-toast";
import { Table } from "antd";
import useGetAllAttendance from "../features/attendance/useGetAllAttendance";
import withAuth from "../store/withAuth";
import {format, parseISO } from "date-fns";
import getDateDifferenceWithFormat from '../utils/getDateDifferenceWithFormat';

// Format the difference into the desired format
// const formattedDifference = (date1, date2) => {
//   // Example dates
//   const d1 = new Date(date1);
//   const d2 = new Date(date2);
//   // Calculate the difference in milliseconds
//   const differenceMs = differenceInMilliseconds(d1, d2);
//   // Convert milliseconds to hours, minutes, and seconds
//   const hours = Math.floor(differenceMs / (1000 * 60 * 60));
//   const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);
//   return format(new Date(0, 0, 0, hours, minutes, seconds), "HH:mm:ss");
// };

const dateFormatNormal = (date) => {
  // Parse the ISO date string into a Date object
  const dateParse = parseISO(date);
  // Format the date into the desired format
  return format(dateParse, "dd:MM:yyyy");
};

const dateToTime = (dateStr) => {
  const date = parseISO(dateStr);
  // Format only the time part into the desired format
  return format(date, 'h:mm:ss a');
}

const AttendanceList = () => {
  const { data, isPending } = useGetAllAttendance();

  const columns = [
    {
      key: "name",
      dataIndex: "name",
      title: "Name",
    },
    {
      key: "date",
      dataIndex: "date",
      title: "Date",
    },
    {
      key: "employeeId",
      dataIndex: "employeeId",
      title: "EmployeeId",
    },
    {
      key: "loginTime",
      dataIndex: "loginTime",
      title: "Login Time",
    },
    {
      key: "logoutTime",
      dataIndex: "logoutTime",
      title: "Logout Time",
    },
    {
      key: "workTime",
      dataIndex: "workTime",
      title: "Work Time",
    },
  ];
  const dataSource = data?.data?.attendance?.map((item) => {
    return {
      name: `${item?.user?.firstName} ${item?.user?.lastName}`,
      date: dateFormatNormal(item?.attendances[0]?.date),
      employeeId: item?.user?.employeeId,
      loginTime: dateToTime(item?.attendances[0]?.loginTime),
      logoutTime: dateToTime(item?.attendances[0]?.logoutTime),
      workTime: getDateDifferenceWithFormat(
        item?.attendances[0]?.logoutTime,
        item?.attendances[0]?.loginTime
      ),
    };
  });

  return (
    <div className="p-4">
      <h2 className="text-xl py-4 ">Attendance List : </h2>
      {isPending && <LoaderIcon />}
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default withAuth(AttendanceList, ['admin']);