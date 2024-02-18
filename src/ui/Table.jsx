import { Table as AntTable } from "antd";
import { differenceInHours, lightFormat } from "date-fns";

const Table = ({ data }) => {
  console.log(data);
  const columns = [
    {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
    {
      title: "Login",
      dataIndex: "login",
      key: "login",
    },
    {
      title: "Logout",
      dataIndex: "logout",
      key: "logout",
    },
    {
      title: "Work Time",
      dataIndex: "workTime",
      key: "workTime",
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
    },
  ];

  const dataSource = data?.data?.attendance?.map((item) => {
    return {
      key: item?._id,
      date: lightFormat(new Date(item?.date), "MM - dd - yyyy"),
      login: lightFormat(new Date(item?.loginTime), "h:mm:ss a"),
      logout: item?.logoutTime && lightFormat(new Date(item?.logoutTime), "h:mm:ss a"),
      workTime: (item?.loginTime && item?.logoutTime) ? differenceInHours(
        new Date(item?.logoutTime),
        new Date(item?.loginTime)
      ) : "--",
    };
  });

  return (
    <div>
      <AntTable bordered dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Table;
