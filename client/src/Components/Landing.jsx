import React, { useEffect } from 'react';
import Header from './Header';
import {getAllProducts} from "../redux/actions"
import { useDispatch, useSelector } from 'react-redux';

export default function Landing(){
    const dispatch = useDispatch()
    const products = useSelector((state)=> state.products)
    useEffect(() => {
        dispatch(getAllProducts());
      }, [dispatch]);
    return(
        <>
            <Header/>
            {
                products &&
                products.map((e) => {
                  return (
                    <NavLink styles={{textDecoration:'none'}} key={e.id} to={`/details/${e.id}`}>
                 
                        {e.id}
                    <img src={e.image} width="200px" height="200px"/>
                        {e.name}
                    {e.rating}
      
                    
      
                  
                    </NavLink>
                  );
                })
            }
        </>
    ) 
}