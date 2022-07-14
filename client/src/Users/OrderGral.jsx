import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUser, getUserByName } from "../redux/actions";
// import { Button, Modal, ModalBody } from "reactstrap";
// import Review from "../ProductDetails/Reviews.jsx";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./orderdetail.module.css";
import { NavLink } from "react-router-dom";
export const OrderGral = () => {
  const dispatch = useDispatch();
  const { user } = useAuth0();
  console.log(user);
  useEffect(() => {
    dispatch(getUserByName(user?.name));
    dispatch(getOrderByUser(user?.email));
  }, []);
  const allOrders = useSelector((state) => state.users);
  console.log(allOrders);
  return (
    <div className={style.container}>


      {allOrders && allOrders.length ? (

        <>
          
          <div className={style.CardTop}>
            <h2> id</h2>
            <h2> Status</h2>
            <h2>User Address</h2>
            <h2>User Email</h2>
            <h2>Products</h2>
          </div>
          
          
          {allOrders.map((e)=>{return(
            <div className={style.Card} key={e.id}  >
            
                <h3 className={style.info}>{e.id}</h3>                
                <h3 className={style.info}>{e.state}</h3>                
                <h3 className={style.info}>{e.address}</h3>                
                <h3 className={style.info}>{e.user.email}</h3>                
                <h3 className={style.info}>{e.products.map((e)=> {return e.quantity}).reduce((previousValue, currentValue) => previousValue + currentValue)} products</h3>                
                <NavLink to={`/user/myorders/${e.id}`}><button className={style.cardbtn}>Detail</button></NavLink>            
            </div>
          )})}
        
        </>

      ):(
        <div>There was an error loading the Orders, please contact the developer</div>
      )}    

  </div>
)
}