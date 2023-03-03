import React from "react";
import logo from '../assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <>
      <a href="/" title="">
        <img src={logo} width="139" height="61" alt="logo" />
      </a>

      <input type="text" placeholder="Search"/>
      <FaSearch className="search-icon" />

      <Button variant="outline-primary">Contact</Button>
      <Button variant="outline-success">Cart</Button>
    </>
  );
}

export default Header;