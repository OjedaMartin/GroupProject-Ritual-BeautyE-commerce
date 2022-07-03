import React, { useState, useEffect } from 'react';
//import SlidingPanel from 'react-sliding-side-panel';
import { useDispatch, useSelector } from 'react-redux';
//import { FaShoppingCart } from "react-icons/fa";
import { addProdToCart, removeProdFromCart, clearCart } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
//import { CSSTransition } from 'react-transition-group';
import Classes from './CartCard.module.css'
//import iconCart from '../images/cart2.png';

export default function CartCard() {
    const prodCart = useSelector((state) => state.prodCart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

    }, [dispatch, prodCart]);

    var totalAmount = 0;

    for (let i = 0; i < prodCart.length; i++) {
        totalAmount = totalAmount + (prodCart[i].price * prodCart[i].quantity);
    }

    var totalQuantity = 0;

    for (let i = 0; i < prodCart.length; i++) {
        totalQuantity = totalQuantity + (prodCart[i].quantity);
    }

    var arrProductsToBack = [];
    prodCart?.map((prod) => {
        for (let i = 1; i <= prod.quantity; i++) {
            arrProductsToBack.push(prod.id)
        }
    })
    





    const handleAddCart = (e) => {
        e.preventDefault();
        const filter = prodCart.find((item) => item.id === e.target.value);


        dispatch(addProdToCart(
            {
                id: filter.id,
                name: filter.name,
                image: filter.image,
                price: filter.price,
                brand: filter.brand,
                in_Stock: filter.in_Stock,
                CategoryId: filter.CategoryId,
                rating: filter.rating,
                quantity: filter.quantity,
            }
        ));
    }

    const handleRemoveCart = (e) => {
        e.preventDefault();
        dispatch(removeProdFromCart({ id: e.target.value }));
    }

    const handleBuy = (e) => {
        e.preventDefault();
        
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(clearCart());
        navigate('/SearchDetail/shopall/allProducts');
    }


    return (
        <div className={Classes.container}>
            <h1 className={Classes.title}>{`Shopping Cart (${totalQuantity})`}</h1>
            {/* <div className={Classes.goHome}>
                <Link to='/'><button className={Classes.btnvolver}>Go Home</button></Link>
            </div> */}
            <div >
                <div >
                    {prodCart?.map(e => {
                        return (
                            <div className={Classes.grid} key={e.id}>

                                <div className={Classes.cardContainer} >
                                    <img src={e.image} alt='Img not found!' />
                                    <h3>{e.name}</h3>

                                    <th>
                                        <tr><button value={e.id} onClick={handleRemoveCart}>-</button></tr>
                                        <tr> <h3>{e.quantity}</h3></tr>
                                        <tr><button value={e.id} onClick={handleAddCart}>+</button></tr>
                                    </th>

                                    <h3 className={Classes.price}>{`Price: $${e.price}`}</h3>
                                    <h3 className={Classes.subTotal}>{`Subtotal: $${e.price * e.quantity}`}</h3>
                                </div>
                            </div>
                        )
                    })}
                    {prodCart.length > 0 ? <h1 className={Classes.total}>Total: {totalAmount}</h1> : ""}
                </div>

            </div>
            <div className={Classes.buttonContainer}>
                {prodCart.length > 0 ? <button className={Classes.buyCart} onClick={handleBuy}><h4>Buy 🛒</h4></button> : ""}
                {prodCart.length > 0 ? <button className={Classes.vaciarCarrito} onClick={handleDelete} ><h4>Clear Cart</h4></button> : ""}
            </div>
        </div >
    );
}

