import { useQuery } from "@tanstack/react-query";
import { getAttendance } from "../../services/attendanceApi";
import { getLocalToken } from "../../services/authApi";

const useGetAttendance = () => {
  const userId = getLocalToken();

  const { data, isPending } = useQuery({
    queryFn: () => getAttendance(userId),
    queryKey: ["attendance"],
  });
  return { data, isPending };
};

export default useGetAttendance;
