import {useEffect} from "react";
import {NavLink, useNavigate} from "react-router-dom";


function ProtectedRoute({ isAuthenticated, children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}
export default ProtectedRoute;
