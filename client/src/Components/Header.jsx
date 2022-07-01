import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom'

import { FaAdn, FaShoppingCart } from "react-icons/fa"

import Style from "./Header.module.css"
import { CartCard } from './CartCard';

export default function Header() {
    return (
        <div className={Style.main}>

            <div className={Style.header}>
                {/*<Link to="/create" ><button className={Style.btnH}> New Product </button></Link>*/}
                <SearchBar />
                <h1 className={Style.title}><Link to="/" style={{ textDecoration: 'none', color: 'black' }} >RITUAL</Link></h1>
                <div className={Style.contIcons}>
                    <Link to="/"><button className={Style.iconUser}><FaAdn /></button></Link>
                    <Link to="/"><button className={Style.iconCart}><CartCard/><FaShoppingCart /></button></Link>
                </div>
            </div>
            <nav className={Style.Navbar}>
                <Link to="/SearchDetail/shopall/allProducts"><button className={Style.subT}>Shop All</button></Link>
                <Link to="/SearchDetail/collection/cat140006"><button className={Style.subT}>Makeup</button></Link>
                <Link to="/SearchDetail/collection/cat150006"><button className={Style.subT}>Skincare</button></Link>
                <Link to="/SearchDetail/collection/cat130042"><button className={Style.subT}>Tools & Brushes</button></Link>
                <Link to="/SearchDetail/collection/cat130038"><button className={Style.subT}>Hair</button></Link>
                {/* <Link to="/SearchDetail/"><button className='subT'>Sale</button></Link> */}
            </nav>

        </div>
    )
}