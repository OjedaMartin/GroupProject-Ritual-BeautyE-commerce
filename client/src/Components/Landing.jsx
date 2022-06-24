import React from 'react';
import SearchBar from './SearchBar'
import Carousel1 from './Carousel';
import Footer from './footer';
import WhatsNew from './whatsnew';

export default function Landing(){
    return(
        <>
            <SearchBar/>
            <Carousel1/>
            <WhatsNew/>
            <Footer/>
        </>
    ) 
}