import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation,  useParams} from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = (props) => {
  const [user,loading] = useAuthState(auth);
  
  const location = useLocation();
const path = useParams();
console.log(path)
  const logout = () => {
    
    signOut(auth);
    localStorage.removeItem('accessToken');
    if(!user){
        
      return <Navigate to="/login" state={{from:location}} replace></Navigate>

  }
  };
  if(loading){
    return <Loading></Loading>
  }

  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
      <li>
        <Link to="/portfolio">My Portfolio</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button onClick={logout} className="btn btn-ghost">
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );
    return (
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl text-red-400">
          Tools House
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItem}</ul>
      </div>
      
      {
          
      }
       
      {props.children}
    </div>
    );
};

export default Navbar;