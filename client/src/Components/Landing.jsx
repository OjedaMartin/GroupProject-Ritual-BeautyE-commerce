import React, { useEffect } from 'react';
import Header from './Header';

//import {getAllProducts} from "../redux/actions"
//import { useDispatch, useSelector } from 'react-redux';
//import { Link, NavLink } from 'react-router-dom';

import SearchBar from './SearchBar'
import Carousel1 from './Carousel';
import Footer from './footer';
import WhatsNew from './whatsnew';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getAllProducts } from '../redux/actions';
import { Link } from "react-router-dom";

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
            <Carousel1/>
            <WhatsNew/>
            <Footer/>


        </>
    ) 
}