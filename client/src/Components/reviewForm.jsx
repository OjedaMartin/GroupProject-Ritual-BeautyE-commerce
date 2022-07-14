
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";

import { getAllProducts } from "../redux/actions";
import style from './reviewForm.module.css'
import { postReview } from "../redux/actions";
import swal from 'sweetalert';
import StarRating from "./Rating";

export default function ReviewForm(){

    const product = useSelector((state) => state.allProducts);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);
    

   const [input, setInput] = useState({
       email: '',
       rating: '',
       name:'',
       text: '',
   })

   function handleChangeEmail(e){
       setInput({
           ...input,
           email: e.target.value
       });
   }
   function handleChangerating(rating){
       setInput({
           ...input,
           rating: rating 
       });
   }
   function handleChangeName(e){
       setInput({
           ...input,
           name: e.target.value
       });
   }
   function handleChangeText(e){
       setInput({
           ...input,
           text: e.target.value
       });
   }


   function handleSubmit(e){
    e.preventDefault();
    dispatch(postReview(input))
    swal({
        title: "Nice",
        text: "Review added!",
        icon: "success"
    });
    setInput({
        email: '',
       rating: '',
       name:'',
       text: '',
    })

}
    
    

   return(
       <>
       <div>    
       <h1 className={style.titleReview}> Your opinion is important for us</h1>
       <p className={style.infoReview}>
         Thank you for your purchase! <br />
        We created this form, so you can give us your opinion about our product.<br />
        We will use all your comments, in order to improve our catalogue and  offer you the best existing products.<br />
        ☺ <br />
        </p>
       </div>
       <form 
       className={style.contForm}
       onSubmit={(e) =>handleSubmit(e)}
       >

        <label className={style.textReview}> Email:</label>
        <input
        type='text' 
        onChange={(e)=> handleChangeEmail(e)}
        value = {input.email}
        />

        <label className={style.textReview}> Product Name:</label>
        <select defaultValue={'DEFAULT'} 
        onChange={(e)=> handleChangeName(e)} >
            <option value='DEFAULT'  disabled defaultValue > All</option>
            {product  &&product.map(product => (
                    <option className={style.textReview} key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
            </select>
            <p>
                {
                input.product
                }
            </p> 
        <label className={style.textReview}> Text:</label>
        <input
        type='text'
        value = {input.text}
        onChange={(e)=> handleChangeText(e)}
        />

        <label className={style.textReview}> Rating:</label>
         <StarRating
            onClick = {handleChangerating}
            stars = {5}
         />  
        <br />

        <button  className={style.buttonReviewF} type = 'submit' onClick={() => navigate(-2)}>add</button>

       </form>
       </>
   )
}