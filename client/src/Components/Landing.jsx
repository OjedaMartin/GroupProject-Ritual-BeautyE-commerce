import React, { useEffect } from 'react';
import {getAllProducts, getAllCategories} from "../redux/actions"
import { useDispatch, useSelector } from 'react-redux';

import Carousel1 from './Carousel';
import WhatsNew from './whatsnew';
import Carousel from './CardsFront';


export default function Landing(){

    const dispatch = useDispatch()
    //const products = useSelector((state)=> state.products)
    

   // console.log(products)

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getAllProducts());
      }, [dispatch]);

    return(
        <>
            
            <Carousel1/>
            <Carousel/>
            <WhatsNew/>
            
        </>
    ) 
}