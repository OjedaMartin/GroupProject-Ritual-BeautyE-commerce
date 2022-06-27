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

            <div>
                <Link to={`/details/${id}`}>
                    <div className='prodImg'>

                        <img src={image} alt='Img not found!' />
                    </div>
                </Link>
            </div>
            <div className='prodInfo'>
                <h2>{brand}</h2>
                
                <div>{name.length>30? <h3>{(name.slice(0,39)).concat('...')}</h3> : <h3>{name}</h3>}</div>
               
                <h3>{price}</h3>
                <h3>{id}</h3>

            </div>
             {/*<button className='cartBtn'>onClick={handleCart} */}
                <img className='photo' src={cart} alt='Buy'/>
           {/* </button>*/}
        </div>
    )
}