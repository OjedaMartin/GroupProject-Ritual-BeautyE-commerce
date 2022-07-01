import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Styles/OrdersAdmin.module.css";

function ReviewsAdmin(){
  return (
          <div className={style.container}>
            
            <h2>Manage all Reviews from here! Ver las reviews, con el usuario que las hizo y poder banear al user</h2>
            
          </div>
  );
};

export default ReviewsAdmin;