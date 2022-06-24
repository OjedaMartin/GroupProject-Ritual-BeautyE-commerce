import React from 'react';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import cart from '../images/carritoIcon.png';
import './ProductCard.css'



export default function ProductCard({ name, brand, image, price, id }) {
    //const dispatch = useDispatch();
    
    
    // const handleCart = (e) => {
    //     e.preventDefault();
    //     dispatch(addToCart(id))
    // }
    return (
        <div className='container1'>
            <div className='prodImg'>
                <Link to={`/details/:${id}`}>{/*VER COMO VA A SER LA RUTA DETAIL*/}
                    <div>
                        <img src={image} alt='Img not found!' />
                    </div>
                </Link>
            </div>
            <div className='prodInfo'>
                <h2>{brand}</h2>
                <h3>{name}</h3>
                <h3>{price}</h3>
            </div>
             <button className='cartBtn'>{/*onClick={handleCart} */}
                <img className='photo' src={cart} alt='Buy'/>
            </button>
        </div>
    )
}