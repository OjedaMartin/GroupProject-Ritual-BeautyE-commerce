import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Styles/Header.module.css";

function HeaderAdmin(){
  return (
    <>
      <header className={style.headerContainer}>
        <NavLink to={`/`} style={{ textDecoration: 'none', color: 'white'  }}>
          <h1>RITUAL</h1>
        </NavLink>
          
          <h2 className={style.headerH2}>Admin</h2>
      </header>
    </>
  );
};

export default HeaderAdmin;