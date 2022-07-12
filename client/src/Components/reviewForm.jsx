
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
       <h1 className={style.titleReview}> Add a Review</h1>
       <p className={style.infoReview}>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  <br />
           laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  <br />
           voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat  <br />
           cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
       </div>
       <form 
       className={style.contForm}
       onSubmit={(e) =>handleSubmit(e)}
       >

        <label> Email:</label>
        <input
        type='text'
        onChange={(e)=> handleChangeEmail(e)}
        value = {input.email}
        />

        <label> Product Name:</label>
        <select defaultValue={'DEFAULT'} 
        onChange={(e)=> handleChangeName(e)} >
            <option value='DEFAULT'  disabled defaultValue > All</option>
            {product  &&product.map(product => (
                    <option key={product.id} value={product.name}>
                      {product.name}
                    </option>
                  ))}
            </select>
            <p>
                {
                input.product
                }
            </p> 
            
        <label> Text:</label>
        <input
        type='text'
        value = {input.text}
        onChange={(e)=> handleChangeText(e)}
        />

        <label> Rating:</label>
         <StarRating
            onClick = {handleChangerating}
            stars = {5}
         />  
        <br />

        <button type = 'submit' onClick={() => navigate(-1)}>add</button>

       </form>
       </>
   )
}