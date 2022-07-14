import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from  "../../redux/actions/index"
import { NavLink } from "react-router-dom";
import style from "./Styles/OrdersAdmin.module.css";
import { ImCross } from "react-icons/im"

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
                    <h2> id</h2>
                    <h2> Status</h2>
                    <h2>User Address</h2>
                    <h2>User Email</h2>
                    
                  </div>
                  
                  
                  {allOrders.map((e)=>{return(
                    <div className={style.Card} key={e.id}  >
                    
                        <h3 className={style.info}>{e.id}</h3>                
                        <h3 className={style.info}>{e.state}</h3>                
                        <h3 className={style.info}>{e.address}</h3>                
                        <h3 className={style.info}>{e.user.email}</h3>                
                        <NavLink to={`/admin/orderdetail/${e.id}`}><button className={style.cardbtn}>Detail</button></NavLink>            
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
//<h3 className={style.info}>{e.products?.map((e)=> {return e.quantity}).reduce((previousValue, currentValue) => previousValue + currentValue)} products</h3>                