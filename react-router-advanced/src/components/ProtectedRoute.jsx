import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";  // <-- make sure this import exists

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // <-- useAuth is called here

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
