import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container-width">
      <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}
          <h3 className="text-3xl text-purple-500 font-bold py-3">
            Welcome to Dashboard
          </h3>
          <Outlet />
        </div>
        <div class="drawer-side pr-5">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content shadow-xl shadow-gray-400">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard/myProfile">
                <i class="fa-solid fa-user"></i> My Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allUser">
                <i class="fa-solid fa-user"></i> All User
              </Link>
            </li>
            <li>
              <Link to="/dashboard/allOrder">
                <i class="fa-solid fa-cart-shopping"></i> All Orders
              </Link>
            </li>
            <li>
              <Link to="/dashboard/myOrder">
                <i class="fa-solid fa-cart-shopping"></i> My Orders
              </Link>
            </li>
            <li>
              <Link to="/dashboard/addReview">
                <i class="fa-solid fa-magnifying-glass"></i> Add A Review
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
