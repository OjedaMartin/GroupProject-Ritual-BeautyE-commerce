import style from "./review.module.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getOrderByUser1, getReviews } from "../redux/actions"
import { useAuth0 } from "@auth0/auth0-react";

export default function Review({id}){
    let reviews = useSelector((state) => state.review)
    let reviewFiltered = reviews.filter((reviews) => reviews.ProductId === id)
    let dispatch = useDispatch()
    const { isAuthenticated, user} = useAuth0();
    let orderuser = useSelector((state) => state.orderByUser)
    console.log(orderuser);
    let arrAux =[];

    if(orderuser.length && isAuthenticated){
    let productorder = orderuser[0].products
    for (let i = 0; i< productorder.length; i++){
    arrAux.push(productorder[i].product.id)
    }   
    console.log(arrAux, 'el arreglo');
  }
    useEffect(()=> {
      
      dispatch(getReviews())
      if(isAuthenticated && user.email){
        dispatch(getOrderByUser1(user.email))
      }
        
    },[dispatch, isAuthenticated,])  

   return(
        <>
       
        {isAuthenticated ?(
            <div className={style.cont}>
            {reviewFiltered && reviewFiltered.length  ? (
                 <>
                 <div className={style.reviewmanzana2}>
                 <div className={style.reviewTitle}>Review</div> 
                 {reviewFiltered.map((review) => {
                       return (
                         <div key={review.id} className={style.textReview}>
                          <p className={style.userMail}>
                            {review.email.slice(0,5)} says: </p>
                          <p>{review.text}</p>
                         </div>
                       );
                     })}
                     { arrAux.includes(id) ?( 
                        <div>
                        <Link to ={'/addreview'} >
                    <button className={style.buttonReview}>Add a review</button>
                    </Link>
                        </div>
                     ):(
                       <p className={style.textReview}> no reviews yet , buy it and let us know your opinion</p>
                     )}
                 </div>
                 </>
               ) : (
                <div className={style.reviewmanzana2}>
            <div className={style.reviewTitle}>Review</div>
            {orderuser.length && arrAux.includes(id) ? ( //aca debe ir si hay order hay un producto con ese id y con ese correo muestre el boton, si no que compre y lo deje 
                        <div>
                        <Link to ={'/addreview'} >
                    <button className={style.buttonReview}>Add a review</button>
                    </Link>
                        </div>
                     ):(
                      <p className={style.textReview}>no reviews yet , buy it and let us know your opinion</p>
                     )}
            </div>
               )}
             </div>
        ):(
          <div className={style.reviewmanzana2}>
                 <div className={style.reviewTitle}>Review</div>
                 {
                   reviewFiltered && reviewFiltered.length ? (
                    reviewFiltered.map((review) => {
                      return (
                        <div key={review.id} className={style.textReview}>
                          <p className={style.userMail}>
                            {review.email.slice(0,5)} says: </p>
                          <p>{review.text}</p>
                         </div>
                      );
                    })
                   ):(
                     <p className={style.textReview}>no reviews yet , buy it and let us know your opinion</p>
                   )
                 }
                 </div>
        )
        }
        </>
   )
}       