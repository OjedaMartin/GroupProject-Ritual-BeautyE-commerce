import React, { useEffect } from 'react';
import {getAllProducts, getAllCategories} from "../redux/actions"
import { useDispatch, useSelector } from 'react-redux';

import Carousel1 from './Carousel';
import WhatsNew from './whatsnew';
import Carousel from './CardsFront';
import { useAuth0 } from '@auth0/auth0-react';
import { Profile } from '../Users/Profile';
import { Logout } from '../Users/LogOut';
import { Link } from 'react-router-dom';
import { FaAdn, FaShoppingCart } from 'react-icons/fa';
import { LoginButton } from '../Users/LogIn';
import s from "./Landing.module.css"
import swal from 'sweetalert'
export default function Landing(){

    const dispatch = useDispatch()
    const products = useSelector((state)=> state.products)
    const { isAuthenticated } = useAuth0();

    const prodCart = useSelector((state) => state.prodCart);
    

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
                        
{isAuthenticated ? (
    <div class={s.body}>
    <nav class={s.side}>
      <ul>
        <li><a href= "0">            <Profile />
 <span><i class="fa fa-map-marker"></i></span></a></li>
        <li><a href="/" >Buy<span><i class="fa fa-compass"></i></span></a></li>
        
      </ul>
    </nav>
  </div>
          
        ) : (
            
            <div class={s.body}>
            <nav class={s.side}>
              <ul>
                <li><a href= "/login"> Login
         <span><i class="fa fa-map-marker"></i></span></a></li>
                <li><a href="/cart">Buy<span><i class="fa fa-compass"></i></span></a></li>
                
              </ul>
            </nav>
          </div>
            // <>
            // <Link to="/"><button ><FaShoppingCart/></button></Link>
            // <LoginButton />
            // </>
         
        )}
        </>
    ) 
}