import React, { useEffect } from 'react';
import Header from './Header';

import {getAllProducts} from "../redux/actions"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar'
import Carousel1 from './Carousel';
import Footer from './footer';
import WhatsNew from './whatsnew';
import Carousel from './CardsFront';


export default function Landing(){

    const dispatch = useDispatch()
    const products = useSelector((state)=> state.products)
    

    console.log(products)

    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);

    return(
        <>
            <Header/>
           <button>
            <Link to="/create">Create Product</Link></button>
            <SearchBar/>

          
            <Header/>
            <Carousel1/>
            <Carousel/>
            <WhatsNew/>
            <Footer/>


        </>
    ) 
}