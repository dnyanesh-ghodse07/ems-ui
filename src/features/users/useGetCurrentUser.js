import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authApi";

const useGetCurrentUser = (userId) => {
  const { data: user, isPending } = useQuery({
    queryFn: () => getCurrentUser(userId),
    queryKey:["user"] ,
  });
  return {
    user,
    isPending,
  };
};

export default useGetCurrentUser;
