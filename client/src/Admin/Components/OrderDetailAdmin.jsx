import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { getOrderById, updateOrderState } from "../../redux/actions/index";
import {  useParams } from "react-router-dom";
import style from "./Styles/OrderDetailAdmin.module.css"
import ProductsAdmin from "./ProductsAdmin";
import { GoCheck } from "react-icons/go"


export default function OrderDetailAdmin (){
    const dispatch = useDispatch()
    const {id} = useParams()
    
   
   useEffect(() => {
       dispatch(getOrderById(id))
    }, [])
    
   const orderDt = useSelector((state)=> state.currentOrder)    
 
   const [state, setState] = useState("")
    

    function handleSelect(e){
      e.preventDefault()
      setState(e.target.value) 

      console.log(state)   
    }
    function handleClick(e){
        e.preventDefault()  
        dispatch(updateOrderState(id,state))
    }


    return(
           <div className={style.container}>

                


                {orderDt && orderDt.length>0 ? orderDt.map((data)=>{return(
                    <div className={style.card}>
                        <h1 className={style.title}> Order Detail </h1>
                        <h4 className={style.littleinfo}>{data.createdAt.slice(0,10)} | #{data.id}</h4>  
                        <div className={style.infocontainer}> 
                            <div className={style.orderState}>
                                <h3 className={style.info}>State: {data.state}  </h3>    
                                   <select onChange={e=>handleSelect(e)} name="OrderState" id={data.id}  >
                                        <option value="Created">Created</option>     
                                        <option value="Dispatched">Dispatched</option>     
                                        <option value="Arrived">Arrived</option>     
                                        <option value="Cancelled">Cancelled</option>                                           
                                   </select> 
                                   <button className={style.ModBtn} onClick={e=>handleClick(e)}><GoCheck/></button>      
                            </div>                                  
                            <h3 className={style.info}>Delivery Address: {data.address}</h3>                
                            <h3 className={style.info}>User Email: {data.user.email}</h3>                
                            <h3 className={style.info}>Total Products: {data.products.map((e)=> {return e.quantity}).reduce((previousValue, currentValue) => previousValue + currentValue)}</h3>
                        </div>
                        {data.products.map((products)=>{
                            return(<div className={style.divListItem}>
                                        <div>
                                        <img className={style.image} src={products.product.image} alt="image not found" ></img>
                                        </div>
                                        <div className={style.itemcont}>
                                        <h1 className={style.itemText}>{products.product.name}</h1>
                                        <h1 className={style.itemText}>{products.product.brand}</h1>    
                                        </div>
                                        <div className={style.billingInfo}>
                                        <h1 className={style.billingText}> Unitary Price: ${products.product.price}</h1>
                                        <h1 className={style.billingText}> products Bought: {products.quantity}</h1>
                                        <h1 className={style.billingText}> Subtotal: ${products.product.price * products.quantity}</h1>    
                                        </div>
                                        
                                        

                                   </div>
                            
                            )
                            
                        })}
                        <h2 className={style.totalPrice}> Total Price: ${data.products.map((item)=> {return item.quantity * item.product.price}).reduce((previousValue, currentValue) => previousValue + currentValue)}</h2>
                    </div>



                )}) : (

                    <h3>this order is currently unavailable</h3>
                )}



           </div>
          )
}
