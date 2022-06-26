import React from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'

import { FaAdn, FaShoppingCart } from "react-icons/fa"

import "./Header.css"

export default function Header(){
    return(
        <div className='main'>
            
            <div className='header1'>
                <Link to="/create" ><button className='btnH'> New Product </button></Link>
                <SearchBar/>
                <h1 className='title'>RITUAL</h1>
                <div className='contIcons'>
                    <Link to="/"><button className='iconUser'><FaAdn/></button></Link>
                    <Link to="/"><button className='iconCart'><FaShoppingCart/></button></Link>
                </div>
            </div>
                <nav className='navBar'>
                    <Link to="/SearchDetail/collection/cat140006"><button className='subT'>Makeup</button></Link>
                    <Link to="/SearchDetail/collection/cat150006"><button className='subT'>Skincare</button></Link>
                    <Link to="/SearchDetail/collection/cat130042"><button className='subT'>Tools & Brushes</button></Link>
                    <Link to="/SearchDetail/collection/cat130038"><button className='subT'>Hair</button></Link>
                    <Link to="/SearchDetail/"><button className='subT'>Sale</button></Link>
                </nav>
            
        </div>
    ) 
}