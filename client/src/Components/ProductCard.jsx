import React from 'react';
import { Link } from 'react-router-dom';
// import {addToCart} from '../redux/actions'
// import { useDispatch } from 'react-redux';
import cart from '../images/carritoIcon.png';
import ClassesProductCard from './ProductCard.module.css'



export default function ProductCard({ name, brand, image, price, id }) {
    // const dispatch = useDispatch();


    const handleAddCart = (e) => {
       // console.log('---->id',id);

       
    }
    return (
        <div className={ClassesProductCard.container1}>
            <div className={ClassesProductCard.top}>
                <h2>{brand.length > 18 ? brand.slice(0, 15).concat('...') : brand}</h2>
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
                <h4>{`$${price}`}</h4>
                <button onClick={handleAddCart} className={ClassesProductCard.cartBtn}>
                    <img src={cart} alt='Buy' />
                </button>
            </div>

        </div>
    )
}