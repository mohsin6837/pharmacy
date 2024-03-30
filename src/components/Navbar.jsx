import React from "react";
import stock_photo from "../images/stock-photo-healthcare.jpg";
import "./Navbar.css"
function Navbar() {
  return (
    <div className="Navbar">
      <img src={stock_photo} alt="" className="navbar-logo" />
      <ul>
        <li>Home</li>
        <li>Cart</li>
        <li>contact us</li>
        <li>Login</li>
        <button>SignUp</button>
      </ul>
    </div>
  );
}
export default Navbar;
