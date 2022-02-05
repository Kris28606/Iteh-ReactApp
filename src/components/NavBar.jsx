import React from 'react';
import { BsCartFill } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  
  return (
    <div className="navBar">
         <MdPets />
      <Link to="/">WEB-SHOP</Link>
      <Link to="/cart" className="cart-items">
          Moja Korpa
        <BsCartFill />
        <p className="cart-num">{cartNum}</p>
      </Link>
    </div>
  );
}

export default NavBar;