import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Navbar from "../Shared/Navbar";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <>
     <Navbar><div className="navbar-end ">
        <label tabIndex="1" for="dashboard-sidebar"className="btn btn-ghost lg:hidden">
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
        
      </div></Navbar>
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-2xl font-bold text-purple-500">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label for="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
                <Link to="/dashboard">My Profile</Link>
              </li>
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/orders">My oders </Link>
              </li>
              <li>
                <Link to="/dashboard/addreview">Add a review</Link>
              </li>
              
            </>
          )}

          {admin && (
            <>
              <li>
                <Link to="/dashboard/users">All User</Link>
              </li>
              <li>
                <Link to="/dashboard/addProduct">Add a Product </Link>
              </li>
              <li>
                <Link to="/dashboard/manageOrder">Manage All order </Link>
              </li>
              <li>
                <Link to="/dashboard/manageProduct">Manage product </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
    
    </>
  );
};

export default Dashboard;
