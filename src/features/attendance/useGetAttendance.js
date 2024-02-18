import { useQuery } from "@tanstack/react-query";
import { getAttendance } from "../../services/attendanceApi";

const useGetAttendance = (userId) => {

  const { data, isPending } = useQuery({
    queryFn: () => getAttendance(userId),
    queryKey: ["attendance", userId],
  });
  
  return { data, isPending };
};

export default useGetAttendance;
