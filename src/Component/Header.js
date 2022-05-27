import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="heading-container">
      <Link to="/home" className="navLink">

        HOME
     
      </Link>
      <Link to="/student" className="navLink">
      
        STUDENTS
        
      </Link>
      <Link to="/contact" className="navLink">
     
        CONTACT US
   
      </Link>
    </div>
  );
};

export default Header;