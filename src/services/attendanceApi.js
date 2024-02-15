import { api, getLocalToken } from "./authApi";
export const createAttendance = async ({ user, time, timeTag, note }) => {
  let payload =
    timeTag === "login" ? { loginTime: time } : { logoutTime: time };
  const response = await api.post("/attendance", {
    user,
    note,
    ...payload
  });

  return response.data;
};

export const getAttendance = async (userId) => {
  const response = await api.get(`/attendance/${userId}`);
  return response.data;
};

export const updateAttendanceApi = async ({ time, timeTag }) => {
    const userId = getLocalToken()
    let payload =
    timeTag === "login" ? { loginTime: time } : { logoutTime: time };
    
    const response = await api.put(`/attendance/${userId}`, payload);
    return response.data;
  
};
