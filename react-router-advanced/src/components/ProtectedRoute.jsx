import { Navigate } from "react-router-dom";

// ProtectedRoute component
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    // If not logged in, redirect to home (or login)
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
