import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProdToCart, removeProdFromCart,getCartByUser } from '../redux/actions'
// import { useDispatch } from 'react-redux';
// import cart from '../images/carritoIcon.png';
import ClassesProductCard from './ProductCard.module.css'
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai"
import swal from 'sweetalert'
import { useAuth0 } from '@auth0/auth0-react';


export default function ProductCard({ name, brand, image, price, id, in_Stock, CategoryId, rating }) {
    const dispatch = useDispatch();
    const prodCart = useSelector((state) => state.prodCart);
    const userCart = useSelector((state) => state.pruebaCartUser);
    const { isAuthenticated } = useAuth0();
    const data = prodCart.length > 0 ? prodCart.find((e) => e.id === id) : undefined;
    const quantity = data !== undefined ? data.quantity : 0;

    

    const handleAddCart = (e) => {

        //ACA SE DEBERIA DE ENVIAR LA INFORMACION AL BACK PARA QUE SE GUARDE Y NO EN EL LOCALSTORAGE
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
        },true ));//isAuthenticated
        if (quantity === 0) {
            swal(`Added to cart`);
        }
        if (true) {
            const emailDemo = "rafa@gmail.com";
            dispatch(addProdToCart(userCart,emailDemo))
            dispatch(getCartByUser(emailDemo))
        }
    }

    const handleRemoveCart = (e) => {
        //ACA SE DEBERIA DE ENVIAR LA INFORMACION AL BACK PARA QUE SE GUARDE Y NO EN EL LOCALSTORAGE
        if (isAuthenticated) {
            dispatch(removeProdFromCart({
                id: id,
                quantity: quantity,
            }));
            if (quantity === 1) {
                swal(`Removed of cart`);
            }
        } else {
            dispatch(removeProdFromCart({
                id: id,
                quantity: quantity,
            }));

            if (quantity === 1) {
                swal(`Removed of cart`);
            }
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