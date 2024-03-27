import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-20 items-center h-20 bg-[rgba(50,50,50,0.7)] text-[rgba(222,222,222,1)] sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <div className="navbar-logo-v">V</div>
          <div className="navbar-logo-here">Logo Here</div>
        </div>
        <div className="flex gap-20">
          <a href="" className="navbar-letter">
            Home
          </a>
          <a href="" className="navbar-letter">
            Work
          </a>
          <a href="" className="navbar-letter">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
