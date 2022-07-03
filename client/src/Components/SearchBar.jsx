import React, { useState } from "react";
//import {useDispatch} from "react-redux"
//import { getProductName } from "../redux/actions";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import style from "./SearchBar.module.css"


export default function SearchBar (){
    //const dispatch = useDispatch()
    const [name,setName] = useState("")

    function inputChangeHandler(e){
    e.preventDefault()
    setName(e.target.value)
    
    }

   // function submitHandler(e){
   //     e.preventDefault()
   //     dispatch(getProductName(name))    
   // }
   //type="submit" onClick={(e)=> submitHandler(e)}
    return (

        


        <div className={style.container}>
            
            <div className={style.searchbox}>
                <form >
                <Link to= {'/SearchDetail/search/' + name} ><button className={style.searchbtn} >
                <FaSearch className={style.icon} aria-hidden='true' id="searchbar-icon"/>
                </button></Link>

                
                <input className={style.search}
                 type="text"
                 placeholder="Search Products by name..."
                 onChange={(e) => inputChangeHandler(e)}
                 id="searchbar-input"
                 />
                </form>
            </div>
        </div>
    )
}
