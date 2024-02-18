import { LoaderIcon } from "react-hot-toast";
import UserCard from "./UserCard";

const AllUsersList = ({ isPending, allUsers }) => {
  return (
    <>
      {isPending && <LoaderIcon />}
      <div className="grid md:grid-cols-4 gap-4">
        {allUsers?.data?.users.map((item) => {
          return <UserCard key={item._id} item={item} />;
        })}
      </div>
    </>
  );
};

export default AllUsersList;
