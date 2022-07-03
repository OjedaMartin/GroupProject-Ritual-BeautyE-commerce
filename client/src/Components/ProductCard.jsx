import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProdToCart, removeProdFromCart } from '../redux/actions'
// import { useDispatch } from 'react-redux';
import cart from '../images/carritoIcon.png';
import ClassesProductCard from './ProductCard.module.css'


export default function ProductCard({ name, brand, image, price, id, in_Stock, CategoryId, rating, qty }) {
    const dispatch = useDispatch();
    const prodCart = useSelector((state) => state.prodCart);

    const data = prodCart.length>0?prodCart.find((e) => e.id === id):undefined;
    const quantity = data !== undefined ? data.quantity : 0;





    const handleAddCart = (e) => {
        dispatch(addProdToCart({
            id: id,
            name: name,
            image: image,
            price: price,
            brand: brand,
            in_Stock: in_Stock,
            CategoryId: CategoryId,
            rating: rating,
            quantity: quantity,
        }));
        alert(`${name}  added to cart`);
    }

    const handleRemoveCart = (e) => {
        dispatch(removeProdFromCart({
            id: id,
            quantity: quantity,
        }));
        alert(`${name}  removed of cart`);
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
                <h3>{quantity>0?quantity:""}</h3>
                {/* <button onClick={handleRemoveCart} className={ClassesProductCard.cartBtn}>{quantity>0? "-" :" "}</button> */}
                {quantity>0?<button onClick={handleRemoveCart} className={ClassesProductCard.cartBtn}>-</button>:""}
            </div>
            <div>
                <h3>{qty}</h3>
            </div>

        </div>
    )
}