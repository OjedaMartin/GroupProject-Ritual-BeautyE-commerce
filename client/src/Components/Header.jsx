import React from 'react';
import SearchBar from './SearchBar';
import {Link} from 'react-router-dom'

import { FaAdn, FaShoppingCart } from "react-icons/fa"

import "./Header.css"

export default function Header(){
    return(
        <div className='main'>
            {/*<img className='photo' src={require('../images/BackgroundHeader.png')} alt="background" />*/}
            <div className='header1'>
                <SearchBar/>
                <h1 className='title'>RITUAL</h1>
                <div className='contIcons'>
                    <Link to="/"><button className='iconUser'><FaAdn/></button></Link>
                    <Link to="/"><button className='iconCart'><FaShoppingCart/></button></Link>
                </div>
            </div>
                <nav className='navBar'>
                    <Link to="/"><button className='subT'>Makeup</button></Link>
                    <Link to="/"><button className='subT'>Skincare</button></Link>
                    <Link to="/"><button className='subT'>Tools & Brushes</button></Link>
                    <Link to="/"><button className='subT'>Hair</button></Link>
                    <Link to="/"><button className='subT'>Sale</button></Link>
                </nav>
            
        </div>
    ) 
}