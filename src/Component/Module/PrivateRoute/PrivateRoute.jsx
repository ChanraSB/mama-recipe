import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.element,
};
export default PrivateRoute;
