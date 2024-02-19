import { Button } from "antd";
import { useState } from "react";
import CreateNewUser from "./CreateNewUser";
import useGetAllUsers from "../features/users/useGetAllUsers";
import AllUsersList from "../ui/AllUsersList";


const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {allUsers, isPending} = useGetAllUsers();
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
      <CreateNewUser isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <AllUsersList allUsers={allUsers} isPending={isPending}/>
    </div>
  );
};

export default  AdminDashboard;
