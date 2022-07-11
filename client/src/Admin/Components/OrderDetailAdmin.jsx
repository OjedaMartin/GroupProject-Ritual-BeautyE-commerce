import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { getOrderById } from "../../redux/actions/index";
import {  useParams } from "react-router-dom";
import style from "./Styles/OrderDetailAdmin.module.css"


export default function OrderDetailAdmin (){
    const dispatch = useDispatch()
    const {id} = useParams()

    const order = dispatch(getOrderById(id)) 

    return(
           <div className={style.container}>
                {order && order.length>0 ? order.map((data)=>{return(
                    <div>
                        <h3 className={style.info}>{data.id}</h3>                
                        <h3 className={style.info}>{data.state}</h3>                
                        <h3 className={style.info}>{data.address}</h3>                
                        <h3 className={style.info}>{data.user.email}</h3>                
                        <h3 className={style.info}>{data.products.map((e)=> {return e.quantity}).reduce((previousValue, currentValue) => previousValue + currentValue)} products</h3>
                    </div>



                )}) : (

                    <h3>this order is currently unavailable</h3>
                )}



           </div>
          )
}
