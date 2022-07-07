import React, { useState } from "react";
import {useDispatch} from "react-redux"
import { getUserByName } from "../../redux/actions/index";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import style from "./Styles/SearchBarAdmin.module.css"


export default function SearchBar (){
    const dispatch = useDispatch()
    const [name,setName] = useState("")

    function inputChangeHandler(e){
    e.preventDefault()
    setName(e.target.value)
    
    }

    function submitHandler(e){
        e.preventDefault()
        dispatch(getUserByName(name))    
    }
   
   
    return (

        


        <div className={style.container}>
            
            <form className={style.searchbox}>
                <button className={style.searchbtn} type="submit" onClick={(e)=> submitHandler(e)}>
                <FaSearch className={style.icon} aria-hidden='true' id="searchbar-icon"/>
                </button>

                
                <input className={style.search}
                 type="text"
                 placeholder="Search Users by name..."
                 onChange={(e) => inputChangeHandler(e)}                                     
                 id="searchbar-input"
                 />
                
            </form>
        </div>
    )
}
