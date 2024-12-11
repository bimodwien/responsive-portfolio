import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-10 bg-[rgba(50,50,50,0.7)] text-[#dedede] backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a href="/" className="text-3xl sm:text-4xl font-extrabold">
            BDP.
          </a>
          <div className="hidden sm:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <button
            className="sm:hidden text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#home" onClick={toggleMenu}>
              Home
            </MobileNavLink>
            <MobileNavLink href="#work" onClick={toggleMenu}>
              Work
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-lg font-bold hover:text-gray-300 transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, onClick, children }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
