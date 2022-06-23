import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {postUser} from "../redux/actions/index";

import "./SignUp.css"


export default function SignUp(){
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
        repeatedpassword: "",
    })


        
    function changeHandler(e){

        setInput((prevData)=>{
            return{
              ...prevData,
            [e.target.name] : e.target.value   
            }
            
            
        })
        console.log(input)
    //    setErrors(validate({
   //         ...input,
    //       [e.target.name] : e.target.value
    //    }))
    }
    useEffect(()=> {
        if(Object.keys(errors).length === 0 && isSubmit){console.log(input)}
    })


    const submitHandler = (e) => {
        e.preventDefault()
        setErrors(validate(input))
        setIsSubmit(true)
       // dispatch(postUser(input))        
      //  alert("Recipe Created Successfully")
        setInput({
            username: "",
            email: "",
            password: "",
            repeatedpassword: "",
        })
    }   

    const validate = (values) => {
        const errors = {};
        const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!values.username){
            errors.username = "Username field is required"
        }
        if(!values.email){
            errors.email = "Email field is required"
        } else if(!regex.test(values.email)){
            errors.email = "this is not a valid email"
        }
        if(!values.password){
            errors.password = "Password field is required"
        }else if(values.password !== values.repeatedpassword){
            errors.password = "The passwords are not the same"
        }
        if(!values.repeatedpassword){
            errors.repeatedpassword = "Repeat password field is required"
        }
    }



    return(
        <>
            <pre>{JSON.stringify(input)}</pre>
            <div className='wrapper'>
            <Link to= '/' style={{ textDecoration: 'none', color: 'white'  }}><button className='btn'>Go Back</button></Link>
            <h1 className='title'>Sign Up</h1>
            <form onSubmit={(e)=>submitHandler(e)}>
                <div className='divcell'>
                     <label className='label1'>Username: </label>
                     <input className='input1' key="username"  type="text" value={input.username} name='username' onChange={(e)=>changeHandler(e)} />
                     {errors.username}
                </div>
                <div className='divcell'>
                     <label className='label1'>Email: </label>
                     <input className='input1' key="email"  type="text" value={input.email} name='email' onChange={(e)=>changeHandler(e)} />
                     {errors.email && (<p className="error">{errors.email}</p>)}
                </div>
                <div className='divcell'>
                     <label className='label1'>Password: </label>
                     <input className='input1' key="password"  type="text" value={input.password} name='password' onChange={(e)=>changeHandler(e)} />
                     {errors.password && (<p className="error">{errors.password}</p>)}
                </div>
                <div className='divcell'>
                     <label className='label1'>Repeat Password: </label>
                     <input className='input1' key="repeatedpassword"  type="text" value={input.repeatedpassword} name='repeatedpassword' onChange={(e)=>changeHandler(e)} />
                     {errors.repeatedpassword && (<p className="error">{errors.repeatedpassword}</p>)}
                </div>
                <button className='btn' type='submit'>Sign Up</button>

            </form>
            </div>
        </>
    ) 
}