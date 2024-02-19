const getUserIdRole = () => {
  if(localStorage.getItem("user")) {
    const { id, role } = JSON.parse(localStorage.getItem("user"));
    return { id, role };
  }
};

export default getUserIdRole;
