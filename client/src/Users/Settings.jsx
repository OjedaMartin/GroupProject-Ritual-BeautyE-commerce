import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
 import {useAuth0}from '@auth0/auth0-react'
import { putUser } from '../redux/actions'
 export const Settings=()=>{
    const dispatch = useDispatch();
    const {logout}= useAuth0();
    const currentUser=useSelector((state)=> state.currentUser)
    const [edit, setEdit]=useState({
        email:"",
        name:"",
        address: "",
        cp: "",
        state: ""
    })
    useEffect(() => {
        setEdit({
            email:currentUser.email,
            name:currentUser.name,
            address: currentUser.address,
            cp: currentUser.cp,
            state: currentUser.state
        })
    })
    function handleChange(e){
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
        console.loge(edit)
    }
    function handleSubmit(e){
        if(edit.name !== ""){
            e.preventDefault();
            alert("Saved");
            dispatch(putUser(edit));
        } else {
            e.preventDefault();
            alert("Complete all fields");
        }
    }
    
    function handleDelete(e){
        e.preventDefault();
        let choose = window.confirm("Are you sure you want to delete this account?")
        if (choose){
            logout({ returnTo: window.location.origin })
            dispatch(putUser({email: currentUser.email, del: true}));
        }
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Your Data</h1>
                <img src={currentUser.picture} alt="not found" />
                <h3>Email</h3>
                <input type="text" value={currentUser.email} disabled />
                <h3>Nombre</h3>
                <input type="text" defaultValue={currentUser.name} name="name" onChange={e => handleChange(e)}/>
                <h3>Dirección</h3>
                <input type="text" defaultValue={currentUser.address} name="address" onChange={e => handleChange(e)} />
                <h3>Código Postal</h3>
                <input type="text" defaultValue={currentUser.cp} name="cp" onChange={e => handleChange(e)} />
                <h3>Ciudad</h3>
                <div>
                    <input type="text" defaultValue={currentUser.state} name="state" onChange={e => handleChange(e)} />
                </div>
                <button type='submit' >Guardar</button>
            </form>
                <button onClick={(e) => handleDelete(e)} >Delete</button>
        </div>
    );
 }