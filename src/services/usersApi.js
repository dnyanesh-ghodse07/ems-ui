import { api } from "./authApi";

export const getAllUserApi = async () => {
    const response = await api.get();
    return response.data;
}


export const deleteUserApi = async (userId) => {
    const response = await api.delete(`/${userId}`);
    return response.data;
}