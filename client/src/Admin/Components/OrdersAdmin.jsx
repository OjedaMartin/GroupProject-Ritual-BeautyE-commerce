import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Styles/OrdersAdmin.module.css";

function OrdersAdmin(){
  return (
          <div className={style.container}>
            
            <h2>Manage all Orders from here!   poder acceder al detalle, poder filtrar por estado, gestionar el estado</h2>
            
          </div>
  );
};

export default OrdersAdmin;