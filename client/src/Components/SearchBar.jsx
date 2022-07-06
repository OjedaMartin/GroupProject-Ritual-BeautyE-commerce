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

  const onSearch = (searchTerm) => {
    setName(searchTerm);
    goTo(`/SearchDetail/search/${name}`)
    console.log("search ", searchTerm);

  };

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
                <div className={style.dropdown}>
            {products
                .filter((item) => {
                const searchTerm = name.toLowerCase();
                const prod = item.name.toLowerCase();

                return (
                    searchTerm &&
                    prod.startsWith(searchTerm) &&
                    prod !== searchTerm
                );
                })
                .slice(0, 10)
                .map((item) => (
                <div
                    onClick={() => onSearch(item.name)}
                    className={style.dropdownRow}
                    key={item.id}
                >
                    {item.name}
                </div>
                ))}
                </div>
        </div>
    )
}





  
        
    