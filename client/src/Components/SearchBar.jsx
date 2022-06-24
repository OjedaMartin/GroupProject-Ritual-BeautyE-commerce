import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { getProductName } from "../redux/actions";
import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

//import { SBdiv, SBinput, SBbutton, SBimg } from "./Styles/StyledSearchBar"
import "./SearchBar.css"

export default function SearchBar (){
    const dispatch = useDispatch()
    const [name,setName] = useState("")

    function inputChangeHandler(e){
    e.preventDefault()
    setName(e.target.value)
    
    }

    function submitHandler(e){
        e.preventDefault()
        dispatch(getProductName(name))    
    }

    return (

        


        <div className="container">
            <div className="searchbox">
                <Link to="/"><button className="search-btn" type="submit" onClick={(e)=> submitHandler(e)}>
                <FaSearch className="icon" aria-hidden='true' id="searchbar-icon"/>
                </button></Link>


                <input className="search"
                 type="text"
                 placeholder="Search Products by name..."
                 onChange={(e) => inputChangeHandler(e)}
                 id="searchbar-input"
                 />
                
            </div>
        </div>
    )
}
//<img src={require('../images/searchBarIcon.png')} alt="Search Bar" width='2%' height='2%'/>