import style from "./review.module.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getReviews } from "../redux/actions"
import { useAuth0 } from "@auth0/auth0-react";

export default function Review({id}){
    let reviews = useSelector((state) => state.review)
    let reviewFiltered = reviews.filter((reviews) => reviews.ProductId === id)
    let dispatch = useDispatch()
    const { isAuthenticated, /* user */ } = useAuth0();
    // console.log(user, 'el user del autho');
  
    useEffect(()=> {
        dispatch(getReviews())
    },[dispatch])  

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
                         <div key={review.id}>
                          <p>{review.email} : </p>
                          <p>{review.text}</p>
                         </div>
                       );
                     })}
                     {reviewFiltered.length === 3 ? ( //aca debe ir si hay order hay un producto con ese id y con ese correo muestre el boton, si no que compre y lo deje 
                        <div>
                        <Link to ={'/addreview'} >
                    <button>Add a review</button>
                    </Link>
                        </div>
                     ):(
                       <p> buy it and let us know your opinion</p>
                     )}
                    
                 </div>
                 </>
               ) : (
                <div className={style.reviewmanzana2}>
            <div className={style.reviewTitle}>Review</div>
            {reviewFiltered.length === 3 ? ( //aca debe ir si hay order hay un producto con ese id y con ese correo muestre el boton, si no que compre y lo deje 
                        <div>
                        <Link to ={'/addreview'} >
                    <button>Add a review</button>
                    </Link>
                        </div>
                     ):(
                      <p>no reviews yet , buy it and let us know your opinion</p>
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
                        <div key={review.id}>
                         <p>{review.email}</p>
                         <p>{review.text}</p>
                        </div>
                      );
                    })
                   ):(
                     <p>no reviews yet , buy it and let us know your opinion</p>
                   )
                 }
                 </div>
        )
        }
        </>
   )
}       