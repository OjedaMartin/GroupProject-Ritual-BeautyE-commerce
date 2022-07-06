
import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaShoppingCart } from "react-icons/fa";

import Style from "./Header.module.css";
// import { Login } from '../Users/LogIn';
import { Logout } from "../Users/LogOut";

export default function Header() {
  const { isAuthenticated } = useAuth0();
  //console.log("header", isAuthenticated);
  return (
    <div className={Style.main}>
      <div className={Style.header}>
        {/*<Link to="/create" ><button className={Style.btnH}> New Product </button></Link>*/}
        <SearchBar />
        <h1 className={Style.title}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            RITUAL
          </Link>
        </h1>
        <div className={Style.contIcons}>
          {isAuthenticated ? (
            <>
              <Logout />
            </>
          ) : (
            <>
              <Link to="/cart">
                <button className={Style.iconCart}>
                  <FaShoppingCart/> 
                </button>
              </Link>
              
            </>
          )}
        </div>
      </div>
      <nav className={Style.Navbar}>
        <Link to="/SearchDetail/collection/cat140006">
          <button className={Style.subT}>Makeup</button>
        </Link>
        <Link to="/SearchDetail/collection/cat150006">
          <button className={Style.subT}>Skincare</button>
        </Link>
        <Link to="/SearchDetail/collection/cat130042">
          <button className={Style.subT}>Tools & Brushes</button>
        </Link>
        <Link to="/SearchDetail/collection/cat130038">
          <button className={Style.subT}>Hair</button>
        </Link>
        {/* <Link to="/SearchDetail/"><button className='subT'>Sale</button></Link> */}
      </nav>
    </div>
  );
}
