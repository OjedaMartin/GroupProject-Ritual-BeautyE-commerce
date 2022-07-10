import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from  "../../redux/actions/index"
import { NavLink } from "react-router-dom";
import style from "./Styles/ReviewsAdmin.module.css";


function OrdersAdmin(){

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  
  const allOrders = useSelector((state)=> state.allOrders)

   
  return (
            <div className={style.container}>


              {allOrders && allOrders.length ? (

                <>
                  
                  <div className={style.CardTop}>
                    <h2>*</h2>
                    <h2>*</h2>
                    <h2>*</h2>
                  </div>
                  
                  
                  {allOrders.map((e)=>{return(
                    <div className={style.Card} key={e.id}>

                        
                        <h3 className={style.info}>{e.id}</h3>                
                        <h3 className={style.info}>{e.id}</h3>                
                        <h3 className={style.info}>{e.id}</h3>                
                                        
                    </div>
                  )})}
                
                </>

              ):(
                <div>There was an error loading the Orders, please contact the developer</div>
              )}    

          </div>
  )
  }


export default OrdersAdmin;