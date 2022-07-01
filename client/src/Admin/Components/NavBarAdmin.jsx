import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Styles/NavBarAdmin.module.css";

function NavBarAdmin(){
  return (
    <>
      <nav className={style.NavContainer}>
        <NavLink to={`/admin/users`} style={{ textDecoration: 'none', color: 'white'  }}>
          <button className={style.NavLink}>
            <h3>Users</h3>
          </button>          
        </NavLink>
        <NavLink to={`/admin/reviews`} style={{ textDecoration: 'none', color: 'white'  }}>
          <button className={style.NavLink}>
            <h3>Reviews</h3>
          </button>          
        </NavLink> 
        <NavLink to={`/admin/products`} style={{ textDecoration: 'none', color: 'white'  }}>
          <button className={style.NavLink}>
            <h3>Products</h3>
          </button>          
        </NavLink>
        <NavLink to={`/admin/categories`} style={{ textDecoration: 'none', color: 'white'  }}>
          <button className={style.NavLink}>
            <h3>Categories</h3>
          </button>          
        </NavLink>        
        <NavLink to={`/admin/orders`} style={{ textDecoration: 'none', color: 'white'  }}>
          <button className={style.NavLink}>
            <h3>Orders</h3>
          </button>          
        </NavLink>           
      </nav>
    </>
  );
};

export default NavBarAdmin;