import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ email, password, name, passwordConfirm }) =>
      signupApi({ email, password, name, passwordConfirm }),
    onSuccess: () => {
      toast.success("User created successfully");
      navigate("/login");
    },
    onError: (err) => {
      toast.error(err.response.data.error);
    },
  });
  return {
    signup,
    isPending,
  };
};

export default useSignup;
