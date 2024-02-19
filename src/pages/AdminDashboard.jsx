import { Avatar, Card, Tooltip } from "antd";
import { LoaderIcon } from "react-hot-toast";
import useGetAllAttendance from "../features/attendance/useGetAllAttendance";
import { isToday } from "date-fns";

const AdminDashboard = () => {
  const { data, isPending } = useGetAllAttendance();
  // const available = allUsers
  const availableEmployees = data?.data?.attendance.map((item) => {
    return {
      name: `${item.user.firstName}`,
      date: !!item?.attendances.filter((item) => isToday(new Date(item.date)))
        .length,
    };
  });
  console.log(
    data?.data?.attendance.map((item) => {
      return {
        name: `${item.user.firstName}`,
        date: !!item?.attendances.filter((item) => isToday(new Date(item.date)))
          .length,
      };
    })
  );
  return (
    <div className="p-8 grid md:grid-cols-3 gap-2">
      <Card className="relative">
        <h1>Available</h1>
        {isPending ? (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <LoaderIcon />
          </div>
        ) : (
          <div className="py-2">
            <Avatar.Group>
              {availableEmployees.map((item) => {
                return (
                  <Tooltip key={item.name} title={item.name} placement="top">
                    <Avatar
                      style={{ backgroundColor: `${item.date ? '#87d068' : '#b94331'}  ` }}
                      alt={item.name}
                    >{item.name}</Avatar>
                  </Tooltip>
                );
              })}
            </Avatar.Group>
          </div>
        )}
      </Card>
      <Card />
      <Card />
    </div>
  );
};

export default AdminDashboard;
