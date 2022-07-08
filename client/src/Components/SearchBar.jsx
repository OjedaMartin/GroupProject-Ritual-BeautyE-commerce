import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
//import { getProductName } from "../redux/actions";
import { Link, useNavigate} from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import style from "./SearchBar.module.css"


export default function SearchBar (){
    const dispatch = useDispatch()
    const [name,setName] = useState("")
    const products = useSelector(((state) => state.allProducts))
    const goTo = useNavigate()

    function inputChangeHandler(e){
    e.preventDefault()
    setName(e.target.value)
    
    }

 function onSearch (searchTerm){
    setName(searchTerm);
    
    console.log("search ", searchTerm);

  };

    function submitHandler(e){
        e.preventDefault()
        goTo(`/SearchDetail/search/${name}`)  
    }
   
    return (

        


        <div className={style.container}>
            
            <form className={style.searchbox}>
                <div>       
                <input className={style.search}
                 type="text"
                 placeholder="Search Products by name..."
                 onChange={(e) => inputChangeHandler(e)}
                 value={name}
                 id="searchbar-input"
                 />
                <button type="submit" onClick={(e)=> submitHandler(e)} className={style.searchbtn} >
                <FaSearch className={style.icon} aria-hidden='true' id="searchbar-icon"/>
                </button>
                </div>
            </form>
                <div className={style.dropdown}>
            {products
                .filter((item) => {
                const searchTerm = name.toLowerCase();
                const prod = item.name.toLowerCase();

                return (
                    searchTerm &&
                    prod.includes(searchTerm) &&
                    prod !== searchTerm
                );
                })
                .slice(0, 5)
                .map((item) => (
                <div
                    onClick={() => onSearch(item.name)}
                    className={style.dropdownrow}
                    key={item.id}
                >
                    {item.name}
                </div>
                ))}
                </div>
        </div>
    )
}





  
        
    