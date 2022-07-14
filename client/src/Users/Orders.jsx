import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById, getOrderByUser, getUserByName } from "../redux/actions";
import { Button, Modal, ModalBody } from "reactstrap";
// import Review from "../ProductDetails/Reviews.jsx";

import NumberFormat from "react-number-format";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./order.module.css";
import { Link, useParams } from "react-router-dom";
export const MyOrders = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useAuth0();
  console.log(user);
  useEffect(() => {
    dispatch(getUserByName(user?.name));
    dispatch(getOrderById(id));
  }, []);
  const orders = useSelector((state) => state.users);
  console.log(orders);
  return (
    <div className={style.card}>
      <h1 className={style.title}> My Orders </h1>
      <Link to="/"><button  className={style.home}>back to Home</button></Link>

      <h5 className={style.littleinfo}>
        {orders?.map((e) => (
          <div className={style.orderState}>
            <h4 className={style.title}> Order n°: </h4>

            <br />
            <h6 className={style.title}>
              
              #{e.id} | {e.createdAt.slice(20, 40)}
            </h6>

            <div>
              <h4 className={style.title}> Products: </h4>
              <br />

              {e?.products?.map((el) => (
                <div className={style.infocontainer}>
                  <img
                    className={style.image}
                    src={el?.product.image}
                    alt="image not found"
                  ></img>

                  <div className={style.itemcont}>
                    <h6 className={style.itemText}>{el.product.name}</h6>
                    {/* <h6 className={style.itemText}>{el.product.brand}</h6>     */}
                  </div>
                  <div className={style.billingInfo}>
                    <h6 className={style.billingText}>
                      {" "}
                      Unitary Price: ${el.product.price}
                    </h6>
                    <h6 className={style.billingText}>
                      {" "}
                      products Bought: {el.quantity}
                    </h6>
                    <h6 className={style.billingText}>
                      {" "}
                      Subtotal: ${el.product.price * el.quantity}
                    </h6>
                  </div>
                </div>
              ))}

              <h2 className={style.totalPrice}>
                {" "}
                Total Price: $
                {e?.products
                  ?.map((item) => {
                    return item.quantity * item.product.price;
                  })
                  .reduce(
                    (previousValue, currentValue) =>
                      previousValue + currentValue
                  )}
              </h2>
            </div>
          </div>
        ))}
      </h5>
    </div>
  );
};
