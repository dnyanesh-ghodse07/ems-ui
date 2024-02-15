import axios from "axios";
import { jwtDecode } from "jwt-decode";

const BASE_URL = "https://ems-app-cmw3.onrender.com/api/v1/users";

// const BASE_URL = "http://localhost:8000/api/v1/users";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getLocalToken = () => {
  const token = localStorage.getItem("token");
  if(!token) return;
  const decodedToken = jwtDecode(token);
  const userId = decodedToken?.id;
  return userId;
};

export const login = async ({ email, password }) => {
  const response = await api.post("/login", { email, password });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isAuthenticated = () => {
  return !!getLocalToken()
};

export const signup = async ({ email, password, name, passwordConfirm }) => {
  const response = await api.post("/signup", {
    email,
    password,
    name,
    passwordConfirm,
  });
  return response.data;
};

export const getCurrentUser = async () => {
  const userId = getLocalToken();

  const user = await api.get(`${userId}`);

  return user.data;
};
