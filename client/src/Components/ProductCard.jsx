import React from 'react';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import cart from '../images/carritoIcon.png';
import ClassesProductCard from './ProductCard.module.css'



export default function ProductCard({ name, brand, image, price, id }) {
    //const dispatch = useDispatch();


    // const handleCart = (e) => {
    //     e.preventDefault();
    //     dispatch(addToCart(id))
    // }
    return (
        <div className={ClassesProductCard.container1}>
            <div className={ClassesProductCard.top}>
                <h2>{brand}</h2>
            </div>

            <div className={ClassesProductCard.ImgDiv}>
                <Link to={'/details/' + id}>
                    <div className={ClassesProductCard.prodImg}>
                        <img src={image} alt='Img not found!' />
                    </div>
                </Link>
            </div>
          
            <div className={ClassesProductCard.name} >
                <h3>{name}</h3> 
            </div>
            <div className={ClassesProductCard.priceAndcart}>
                <h4>{price}</h4>
                <button className={ClassesProductCard.cartBtn}>{/*onClick={handleCart} */}
                    <img src={cart} alt='Buy' />
                </button>
            </div>

        </div>
    )
}