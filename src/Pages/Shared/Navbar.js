import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);

  // logout user
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("access");
  };

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/portfolio">My Portfolio</Link>
      </li>
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}

      <li>
        {user ? (
          <button className="btn btn-secondary" onClick={logOut}>
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="btn btn-info">
            Login
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="container-width">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokew="true"
                  idth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl" href="/">
            Tools Manufacture
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <label
            tabIndex="1"
            htmlFor="dashboard-bar"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
