import React, { Fragment } from 'react';
import SearchBar from './SearchBar';

import { FaAdn, FaShoppingCart } from "react-icons/fa"

import "./Header.css"

export default function Header(){
    return(
        <div className='main'>
            <div className='header1'>
            <SearchBar/>
            <h1 className='title'>RITUAL</h1>
            <div className='contIcons'>
                <button className='iconUser'><FaAdn/></button>
                <button className='iconCart'><FaShoppingCart/></button>
            </div>
            </div>
            <nav className='navBar'>
                <h2 className='subT'>Makeup</h2>
                <h2 className='subT'>Skincare</h2>
                <h2 className='subT'>Tools & Brushes</h2>
                <h2 className='subT'>Hair</h2>
                <h2 className='subT'>Sale</h2>
            </nav>
            
        </div>
    ) 
}