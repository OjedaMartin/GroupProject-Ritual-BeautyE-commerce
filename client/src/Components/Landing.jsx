import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './footer';
import Carousel1 from './Carousel';
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