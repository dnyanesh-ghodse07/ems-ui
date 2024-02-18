import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi } from "../../services/usersApi";

export const useDeleteUser = () => {
  console.log("DELETE");
  const queryClient =  useQueryClient();
  const { mutate: deleteUser, isPending } = useMutation({
    mutationFn: (userId) => deleteUserApi(userId),
    mutationKey: ["users"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  return {
    deleteUser,
    isPending,
  };
};
