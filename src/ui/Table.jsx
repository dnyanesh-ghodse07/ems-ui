import { format } from "date-fns";
import TableCell from "./TableCell";
import TableCellHead from "./TableCellHead";


const formateDate = (dt) => {
    if (!dt) return;
    return format(dt, "dd/MM/yyyy h:mm a");
  };

const Table = ({data: employeesAttendance}) => {
  return (
    <table className="w-full border-collapse border border-slate-500">
    <thead>
      <tr className="">
        <TableCellHead className="border border-slate-600">
          Login
        </TableCellHead>
        <TableCellHead className="border border-slate-600">
          Logout
        </TableCellHead>
        <TableCellHead className="border border-slate-600">
          Note
        </TableCellHead>
      </tr>
    </thead>
    <tbody className="overflow-scroll">
      {employeesAttendance?.data?.attendance?.map((item) => {
        return (
          <tr key={item._id}>
            <TableCell>{formateDate(item?.loginTime)}</TableCell>
            <TableCell>{formateDate(item?.logoutTime)}</TableCell>
            <TableCell>{item?.note}</TableCell>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}

export default Table