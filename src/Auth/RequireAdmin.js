import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../firebase.config";
import useAdmin from "../Hooks/useAdmin";
import Spinner from "../Pages/Shared/Spinner";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, loadingAdminCheck] = useAdmin(user);
  const location = useLocation();

  if (loading || loadingAdminCheck) {
    return <Spinner />;
  }

  if (!user || admin === false) {
    signOut(auth);
    localStorage.removeItem("access");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  if (admin === true) {
    return children;
  }
};

export default RequireAdmin;
