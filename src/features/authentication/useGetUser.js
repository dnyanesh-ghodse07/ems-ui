import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authApi";

const useGetUser = () => {
  const { data: user, isPending } = useQuery({
    queryFn: getCurrentUser,
    queryKey:["user"]
  });

  return {
    user: user?.data?.user,
    isPending,
  };
};

export default useGetUser;
