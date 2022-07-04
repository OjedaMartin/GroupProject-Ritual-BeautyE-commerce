import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProdToCart, removeProdFromCart } from '../redux/actions'
// import { useDispatch } from 'react-redux';
import cart from '../images/carritoIcon.png';
import ClassesProductCard from './ProductCard.module.css'
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai"
import swal from 'sweetalert'


export default function ProductCard({ name, brand, image, price, id, in_Stock, CategoryId, rating, qty }) {
    const dispatch = useDispatch();
    const prodCart = useSelector((state) => state.prodCart);

    const data = prodCart.length > 0 ? prodCart.find((e) => e.id === id) : undefined;
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
        if (quantity === 0) {
            swal(`Added to cart`);
        }
    }

    const handleRemoveCart = (e) => {
        dispatch(removeProdFromCart({
            id: id,
            quantity: quantity,
        }));
        
        if (quantity === 1) {
            swal(`Removed of cart`);
        }
    }
    
    return (
        <div className={ClassesProductCard.container1}>
            <div className={ClassesProductCard.top}>
                <h5>{brand.length > 18 ? brand.slice(0, 15).concat('...') : brand}</h5>
            </div>

            <div className={ClassesProductCard.ImgDiv}>
                <Link to={'/details/' + id}>
                    <div className={ClassesProductCard.prodImg}>
                        <img src={image} alt='Img not found!' />
                    </div>
                </Link>
            </div>

            <div className={ClassesProductCard.names} >
                <p>{name.length > 28 ? (name.slice(0, 25)).concat('...') : name}</p>
            </div>
            <p>{`$${price}`}</p>
            <div className={ClassesProductCard.priceAndcart}>
                {quantity > 0 ? <AiFillMinusSquare className={ClassesProductCard.btn} onClick={handleRemoveCart} /> : ""}
                <p>{quantity > 0 ? quantity : ""}</p>
                <AiFillPlusSquare className={ClassesProductCard.btn} onClick={handleAddCart} />
            </div>


        </div>
    )
}