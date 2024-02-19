import axios from "axios";

// const BASE_URL = "https://ems-app-cmw3.onrender.com/api/v1/users";
const token = localStorage.getItem("token");


const BASE_URL = "http://localhost:8000/api/v1/users";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// export const getLocalToken = () => {
//   if (!token) return;
//   const decodedToken =  jwtDecode(token);
//   const userId = decodedToken.id;
//   const role = decodedToken.role;
//   return {userId, role};
// };

export const login = async ({ email, password }) => {
  const response = await api.post("/login", { email, password });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const signup = async (values) => {
  const response = await api.post("/signup", { ...values });
  return response.data;
};

export const getCurrentUser = async (userId) => {
  const user = await api.get(`${userId}`);
  return user.data;
};
