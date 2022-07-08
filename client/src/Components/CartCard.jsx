import React, { useEffect, useState } from 'react';
//import SlidingPanel from 'react-sliding-side-panel';
import { useDispatch, useSelector } from 'react-redux';
import { FaRegSadCry } from "react-icons/fa";
import {
    addProdToCart,
    removeProdFromCart,
    clearCart,
    removeAllOneProdToCart,
    addCartToBack,
    getCartbyUser,
    getAllUsers
} from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
// import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai"
import Classes from './CartCard.module.css';
import trashIcon from '../images/trash.png';
import swal from 'sweetalert'
//------------------------pasarela de pagos
import PaymentGateways from './PaymentGateways';
//------------------------AUTH0
import { useAuth0 } from '@auth0/auth0-react';

export default function CartCard() {
    const allProd = useSelector((state) => state.allProducts);
    const prodCart = useSelector((state) => state.prodCart);
    const userCart = useSelector((state) => state.pruebaCartUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //--------------------------------------------------
    const { isAuthenticated, user } = useAuth0();
    //--------------------------------------------------
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getAllUsers())
            dispatch(getCartbyUser(user.email))
            console.log('TERMINO DE EJECUTAR getCartbyUser')
        }
    }, [dispatch, prodCart, isAuthenticated, user]);

    var totalAmount = 0;

    for (let i = 0; i < prodCart.length; i++) {
        totalAmount = totalAmount + (prodCart[i].price * prodCart[i].quantity);
    }

    var totalQuantity = 0;

    for (let i = 0; i < prodCart.length; i++) {
        totalQuantity = totalQuantity + (prodCart[i].quantity);
    }


    // const addProd = (e) => {
    //     const filter = prodCart.find((item) => item.id === e.target.value);
    //         if (filter.quantity < filter.in_Stock) {
    //             dispatch(addProdToCart(
    //                 {
    //                     id: filter.id,
    //                     name: filter.name,
    //                     image: filter.image,
    //                     price: filter.price,
    //                     brand: filter.brand,
    //                     in_Stock: filter.in_Stock,
    //                     CategoryId: filter.CategoryId,
    //                     rating: filter.rating,
    //                     quantity: filter.quantity,
    //                 }
    //             ));        
    // }

    const handleAddCart = (e) => {
        e.preventDefault();
        const filter = prodCart.find((item) => item.id === e.target.value);
        if (filter.quantity < filter.in_Stock) {
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
        } else {
            swal(`Insufficient stock in: ${filter.name}`);
        }
    }


    const handleRemoveCart = (e) => {
        //LO DEBERIA DE MANDAR AL BACK PARA BASE DE DATOS
        //LIMPIAR EL LOCALSTORAGE
        e.preventDefault();
        dispatch(removeProdFromCart({ id: e.target.value }));

    }
    const handleBuy = (e) => {
        e.preventDefault();
        if (isAuthenticated) {
            //dispatch(getUser())
            const dataBody = [];
            prodCart?.map((prod) => {
                return (
                    dataBody.push({
                        id: prod.id,
                        cant: prod.quantity,
                    })
                )
            });
            console.log('dataBody', dataBody)
            const bodyFinsh = { productsId: dataBody, email: user.email }
            console.log('Informacion para el back-->', bodyFinsh)
            dispatch(addCartToBack(bodyFinsh));
            swal('¡Succes! Your cart is ready.');
            // navigate('/');
            dispatch(clearCart());
            return (
                <PaymentGateways />
            )
        } else {
            swal('You need login, to finish your cart!');
            navigate("/login");
        }
    }
    const handleDelete = (e) => {
        //ACA SE DEBERIA DE ELIMINAR EL CARRITO DE LA BASE DE DATOS? O CAMBIAR DE ESTADO VER!
        e.preventDefault();
        let confirmDelete = window.confirm("Do you are sure, to delet all cart?");
        if (confirmDelete) {
            dispatch(clearCart());
            navigate('/SearchDetail/shopall/allProducts');
        }

    }
    const handleDeleteOneProd = (e) => {
        e.preventDefault();
        let confirmDelete = window.confirm("Do you are sure, to delet this product?");
        if (confirmDelete) {
            const filter = prodCart.find((item) => item.id === e.target.value);
            dispatch(removeAllOneProdToCart(
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



    }

    if (prodCart.length > 0) {
        return (
            <div className={Classes.container}>
                <h1 className={Classes.title}>{`Shopping Cart (${totalQuantity})`}</h1>
                <div >
                    <div >
                        {prodCart?.map(e => {
                            return (
                                <div className={Classes.grid} key={e.id}>
                                    <div className={Classes.cardContainer} >
                                        <Link to={'/details/' + e.id}><img src={e.image} alt='Img not found!' /></Link>
                                        <h3 className={Classes.cardName} >{(e.name).length > 25 ? (e.name).slice(0, 21).concat('...') : e.name}</h3>
                                        <div className={Classes.priceAndcart2}>
                                            <button value={e.id} className={Classes.btn2} onClick={handleRemoveCart}>-</button>
                                            <h3>{e.quantity}</h3>
                                            <button value={e.id} className={Classes.btn2} onClick={handleAddCart}>+</button>
                                        </div>
                                        <h3 className={Classes.price}>{`Price: $${e.price}`}</h3>
                                        <h3 className={Classes.subTotal}>{`Subtotal: $${e.price * e.quantity}`}</h3>
                                        <button value={e.id} className={Classes.btnTrash} onClick={handleDeleteOneProd} src={trashIcon}>X</button>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <img src={trashIcon} alt='Icon not found!' width='30px' /> */}
                        {prodCart.length > 0 ? <h1 className={Classes.total}>Total: {`$${totalAmount}`}</h1> : ""}
                    </div>

                </div>
                <div className={Classes.buttonContainer}>
                    {prodCart.length > 0 ? <button className={Classes.buyCart} onClick={handleBuy}><h4>Buy 🛒</h4></button> : ""}
                    {prodCart.length > 0 ? <button className={Classes.vaciarCarrito} onClick={handleDelete} ><h4>Clear Cart</h4></button> : ""}
                </div>
            </div >

        );
    } else {
        return (
            <div className={Classes.container}>
                <h1 className={Classes.title}>Shopping Cart (<FaRegSadCry></FaRegSadCry>)</h1>
            </div>
        )
    }
}