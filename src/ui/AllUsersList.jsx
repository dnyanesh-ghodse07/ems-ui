import { LoaderIcon } from "react-hot-toast";
import UserCard from "./UserCard";
import useGetAllUsers from "../features/users/useGetAllUsers";
import CreateNewUser from "../pages/CreateNewUser";
import withAuth from "../store/withAuth";
import { useState } from "react";
import { Button } from "antd";

const AllUsersList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { allUsers, isPending } = useGetAllUsers();

  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
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
        <CreateNewUser
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        {isPending && <LoaderIcon />}
        <div className="grid md:grid-cols-4 gap-4">
          {allUsers?.data?.users.map((item) => {
            return <UserCard key={item._id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default withAuth(AllUsersList, ["admin"]);
