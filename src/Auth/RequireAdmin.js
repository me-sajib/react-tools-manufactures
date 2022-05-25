import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase.config";
import useAdmin from "../Hooks/useAdmin";
import Spinner from "../Pages/Shared/Spinner";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  if (loading || adminLoading) {
    return <Spinner />;
  }

  if (!user || !admin) {
    signOut(auth);
    localStorage.removeItem("access");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
