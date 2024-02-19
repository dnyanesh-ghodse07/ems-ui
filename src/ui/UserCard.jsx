import { Card, Dropdown } from "antd";
import { HiOutlineDotsVertical } from "react-icons/hi";

const { Meta } = Card;

const UserCard = ({ item }) => {
  const items = [
    {
      label: <div>Delete</div>,
      key: "0",
    },
    {
      label: <div>Edit</div>,
      key: "1",
    }
  ];
  return (
    <Card>
      <Meta title={`${item.firstName} ${item.lastName}`} />
      <div>
        <div className="">Email: {item?.email}</div>
        <div className="">EmployeeId: {item?.employeeId}</div>
        <div className="">Reporting Manager : {item?.reportingManager}</div>
        <div className="">Team Lead : {item?.teamLead}</div>
        <div></div>
      </div>
      <Dropdown
        className="absolute top-2 right-2"
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <HiOutlineDotsVertical className="cursor-pointer" />
      </Dropdown>
    </Card>
  );
};

export default UserCard;
