import { Card } from "antd";
import {HiOutlineDotsVertical} from 'react-icons/hi'

const { Meta } = Card;

const UserCard = ({ item }) => {
  return (
    <Card>
      <Meta title={`${item.firstName} ${item.lastName}`} />
      <div>
        <HiOutlineDotsVertical className="absolute top-2 right-2 cursor-pointer"/>
        <div className="">Email: {item?.email}</div>
        <div className="">EmployeeId: {item?.employeeId}</div>
        <div className="">Reporting Manager : {item?.reportingManager}</div>
        <div className="">Team Lead : {item?.teamLead}</div>
      </div>
    </Card>
  );
};

export default UserCard;
