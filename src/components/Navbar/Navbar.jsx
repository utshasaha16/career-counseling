import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/myProfile">My Profile</NavLink>
    </>
  );
  return (
    <nav className="bg-[#D9D9D9]">
      <div className="navbar md:w-[80%] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-2"
            >
              {navLinks}
            </ul>
          </div>
          <h1 className="text-xl font-extrabold">
            <span className="text-[#E09D15]">Career</span>{" "}
            <span className="text-[#3C4483]">Counseling</span>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {
            user && user?.email ? <div className="mr-2 relative group"><img className="w-12 h-12 rounded-full cursor-pointer" src={user?.photoURL} alt="" />
            <div className="absolute left-1/2 -translate-x-1/2 mt-2  bg-gray-400 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 p-2 z-10 transition-opacity duration-300">
              <p className="text-center">{user.displayName}</p>
            </div>
            </div> : ""
          }
          {user && user?.email ? (
            <Link
              onClick={logOut}
              className="px-10 py-2 bg-[#E09D15] rounded-lg text-white"
            >
              LogOut
            </Link>
          ) : (
            <Link
              to="/auth/logIn"
              className="px-10 py-2 bg-[#E09D15] rounded-lg text-white"
            >
              LogIn
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
