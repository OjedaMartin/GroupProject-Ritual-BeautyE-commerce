import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderByUser } from "../redux/actions";
import { Button, Modal, ModalBody } from "reactstrap";
// import Review from "../ProductDetails/Reviews.jsx";

import NumberFormat from "react-number-format";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const MyOrders = () => {
  const dispatch=useDispatch()
  const orders= useSelector((state) => state.users)
  console.log(orders)
  const { user } = useAuth0();
  
  useEffect(() => {
    dispatch(getOrderByUser(user?.email))
  })
  return (
    <div>
      <h1>Orders</h1>
      <div >
        <div >
          {orders?.map((e) => (
            <div >
              <p >N° of order: {e.CartId}</p>
              {/* <p >
                Price:{" "}
                {
                  <NumberFormat
                    value={e.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                }
              </p> */}
              <p>Products: </p>
              <ul >
                {e?.products?.map((el) => (
                  <div >
                    <li >
                      <img src={el.picture} alt="not found" width="100px" />
                      <p>{el.name}</p>
                    </li>
                    {/* <Button onClick={toggle}>Add Comment</Button> */}
                    {/* <Modal isOpen={comment} toggle={toggle}> */}
                      {/* <ModalBody> */}
                        {/* <Review productProductId={el.ProductId} /> */}
                      {/* </ModalBody> */}
                    {/* </Modal> */}
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
