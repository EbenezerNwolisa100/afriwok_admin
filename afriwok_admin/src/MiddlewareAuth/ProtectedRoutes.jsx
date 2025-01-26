import { useAuthMiddleware } from "./useAuthMiddleware";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuthMiddleware();

  return isAuthenticated ? children : null;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
