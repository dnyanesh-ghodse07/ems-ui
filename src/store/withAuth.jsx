import { Navigate } from 'react-router-dom';

const withAuth = (WrappedComponent, allowedRoles = []) => {
  const AuthWrapper = (props) => {
    const user = JSON.parse(localStorage.getItem("user"));
    // if (user.role === 'user') {
    //   return <Navigate to="/dashboard" />;
    // }
    // Check if the user has the required roles for authorization
    if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
      return <Navigate to="/unauthorized" />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthWrapper;
};

export default withAuth;
