import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useDispatch, useSelector } from "react-redux";
// import { Button, Modal, ModalBody } from "reactstrap";
// import Review from "../ProductDetails/Reviews.jsx";
import {  getProfile, getUs, Log } from "../redux/actions";

export const MyOrders = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log("detalle de user........",user)
  const perfil= useSelector((state) => state.actual) 
  console.log("prf", perfil)
  const dispatch = useDispatch();
 
  useEffect(() => {
   dispatch(getProfile(user?.email))
},[dispatch, user?.email])

return(
  <div>
    <h1>My Orders</h1>
    <label>Name:</label>
        <h2>{perfil?.CartId===null?"asfdas":perfil?.CartId} </h2>
    
  </div>
)
};
