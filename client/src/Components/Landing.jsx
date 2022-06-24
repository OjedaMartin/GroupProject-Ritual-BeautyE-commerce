import React, { useEffect } from 'react';
import Header from './Header';
import Carousel1 from './Carousel';
import Footer from './footer';
import WhatsNew from './whatsnew';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/actions';


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