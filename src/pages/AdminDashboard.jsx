import { Button } from "antd";
// import Users from "../ui/Users";
import { useState } from "react";
import CreateNewUser from "./CreateNewUser";
import useGetAllUsers from "../features/users/useGetAllUsers";
import AllUsersList from "../ui/AllUsersList";
// import useGetAllAttendance from "../features/attendance/useGetAllAttendance";
// import { LoaderIcon } from "react-hot-toast";

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {allUsers, isPending} = useGetAllUsers();
  console.log(allUsers?.data?.users)
  // const {data: attendance, isPending} = useGetAllAttendance()
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="p-8">
      <div className="flex justify-between pb-4">
        <h1>All employees list</h1>
        <Button
          className="bg-slate-100 dark:bg-slate-500 dark:text-slate-100"
          onClick={showModal}
        >
          Create New User
        </Button>
      </div>
      {/* <Users /> */}
      <CreateNewUser isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      {/* <div>
        {isPending && <LoaderIcon/>}
        {
          attendance?.data?.attendance?.map(item => {
            return <>sfd</>
          })
        }
      </div> */}
      <AllUsersList allUsers={allUsers} isPending={isPending}/>
    </div>
  );
};

export default  AdminDashboard;
