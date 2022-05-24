import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.config";
import Spinner from "../Shared/Spinner";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const { data: isAdminUser, isLoading } = useQuery("isAdmin", () =>
    fetch(`http://localhost:5000/user/${user.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    }).then((res) => res.json())
  );
  if (loading || isLoading) return <Spinner />;
  return (
    <div className="container-width">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <h3 className="text-3xl text-purple-500 font-bold py-3">
            Welcome to Dashboard
          </h3>
          <Outlet />
        </div>
        <div className="drawer-side pr-5">
          <label for="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content shadow-xl shadow-gray-400">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard/myProfile">
                <i className="fa-solid fa-user"></i> My Profile
              </Link>
            </li>
            {/* if user is admin then show */}
            {isAdminUser?.role === "admin" ? (
              <>
                <li>
                  <Link to="/dashboard/allUser">
                    <i className="fa-solid fa-users"></i> Make Admin
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/allOrder">
                    <i className="fa-solid fa-cart-shopping"></i>Manage All
                    Orders
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">
                    <i className="fa-solid fa-cart-add"></i>Add A Product
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProduct">
                    <i className="fa-solid fa-cart-shopping"></i>Manage Products
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* user see this nav link */}

                <li>
                  <Link to="/dashboard/myOrder">
                    <i className="fa-solid fa-cart-shopping"></i> My Orders
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/addReview">
                    <i className="fa-solid fa-magnifying-glass"></i> Add A
                    Review
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
