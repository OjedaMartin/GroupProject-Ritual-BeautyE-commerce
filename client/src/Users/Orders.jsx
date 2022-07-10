import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, ModalBody } from "reactstrap";
// import Review from "../ProductDetails/Reviews.jsx";

import NumberFormat from "react-number-format";

export const MyOrders = () => {
  const orders= useSelector((state) => state.currentUser)
  console.log(orders)
  
  return (
    <div>
      <h1>Orders</h1>
      <div >
        <div >
          {orders?.map((e) => (
            <div >
              <p >N° of order: {e.CartId}</p>
              <p >
                Price:{" "}
                {
                  <NumberFormat
                    value={e.amount}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                }
              </p>
              <p>Products: </p>
              <ul >
                {e?.productCart?.map((el) => (
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
