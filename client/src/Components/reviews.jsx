import style from "./review.module.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getReviews } from "../redux/actions"

export default function Review({id}){
    let reviews = useSelector((state) => state.review)
    let reviewFiltered = reviews.filter((reviews) => reviews.ProductId === id)
    let dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getReviews())
    },[dispatch])  

   return(
        <div>
       {reviewFiltered && reviewFiltered.length  ? (
            <>
            <div className={style.reviewmanzana2}>
            <div className={style.reviewTitle}>Review</div> 
            {reviewFiltered.map((review) => {
                  return (
                    <div key={review.id}>
                     <p>{review.text}</p>
                    </div>
                  );
                })}
                <div>
                <Link to ={'/addreview'} >
            <button>Add a review</button>
            </Link>
                </div>
            </div>
            </>
          ) : (
            <div className={style.reviewmanzana2}>
            <div className={style.reviewTitle}>Review</div>
            <Link to ={'/addreview'} >
            <button>Add a review</button>
            </Link>
            </div>
          )}
       
      
        </div>
   )
}       