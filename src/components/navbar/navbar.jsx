import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-20 items-center h-20 bg-[rgba(50,50,50,0.7)] text-[rgba(222,222,222,1)] sticky top-0 z-10 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <a href="/">
            <div className="navbar-logo-v">BDP.</div>
          </a>
        </div>
        <div className="flex gap-20">
          <a href="#home" className="navbar-letter">
            Home
          </a>
          <a href="#work" className="navbar-letter">
            Work
          </a>
          <a href="#contact" className="navbar-letter">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
