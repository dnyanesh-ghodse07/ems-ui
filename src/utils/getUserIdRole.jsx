const getCurrentUser = () => {
  const { id, role } = JSON.parse(localStorage.getItem("user"));
  return { id, role };
};

export default getCurrentUser;
