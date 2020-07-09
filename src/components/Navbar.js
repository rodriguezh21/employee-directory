import React from "react";





function Navbar(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange("Home")} className={`nav-link ${props.currentPage === 'Home' && 'active'}`}>
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick={() => props.handlePageChange("About")} className={`nav-link ${props.currentPage === 'About' && 'active'}`}>
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#blog" onClick={() => props.handlePageChange("Blog")} className={`nav-link ${props.currentPage === 'Blog' && 'active'}`}>
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => props.handlePageChange("Contact")} className={`nav-link ${props.currentPage === 'Contact' && 'active'}`}>
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
